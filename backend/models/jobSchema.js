import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    requirements: {
      type: String,
      required: [true, "Requirements is required"],
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    jobType: {
      type: String,
      required: [true, "Job type is required"],
    },
    position: {
      type: Number,
      required: [true, "Position is required"],
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: [true, "Company is required"],
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", jobSchema);
