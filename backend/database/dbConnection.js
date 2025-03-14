import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Kanhu143:Kanhu143@job-portal.miay9.mongodb.net/JobPortalDB?retryWrites=true&w=majority"
    );
    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.error("❌ Database Connection Failed:", error.message);
  }
};

export default dbConnection;
