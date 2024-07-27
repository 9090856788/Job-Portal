import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "User not authenticated",
            success: false,
        });
    }
    // verify token using jsonwebtoken (way 1)
    // await jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    //   if (err) {
    //     return res.status(401).json({
    //       message: "User not authenticated",
    //       success: false,
    //     });
    //   }
    //   req._id = user.userId;
    //   next();
    // });

    // verify token using jsonwebtoken (way 2)
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
        return res.status(401).json({
            message: "User not authenticated",
            success: false,
        });
    }
    req._id = decode.userId;
    next();
};

export default isAuthenticated;
