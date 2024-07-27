import { User } from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Create Register API

export const Register = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({
        message: "User email is already exists",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });
    res.status(200).json({
      message: "User Account Registered Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// Login API

export const Login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "User email or Password is incorrect",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "User email or Password is incorrect",
        success: false,
      });
    }
    // check role is correct or not
    if (role !== user.role) {
      res.status(401).json({
        message: "User role is not Matching with the registered user",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullName}`,
        success: true,
        user,
      });
  } catch (error) {
    console.log(error);
  }
};

// User Profile Update
export const UpdateProfile = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;

    if (!fullName || !email || !phoneNumber || !bio || !skills) {
      return res.status(400).json({
        message: "Some fields are missing",
        success: false,
      });
    }

    // cloudinary configuration section here

    const skillsArray = skills.split(",");
    const userId = req._id; // req.id is coming from middleware authentication
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    // updating user data
    user.fullName = fullName;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.profile.bio = bio;
    user.profile.skills = skillsArray;

    // resume section here

    await user.save();

    // returning the user
    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      message: "User Profile Updated Successfully",
      success: true,
      user: user,
    });
  } catch (error) {
    console.log(error);
  }
};

// Logout API
export const Logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "User Logged Out Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
