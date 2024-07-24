import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "JobId is required"],
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Applicant is required"],
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export const Application = mongoose.model("Application", applicationSchema);
