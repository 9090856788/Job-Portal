import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Company name is required"],
    },
    description: {
      type: String,
    },
    website: {
      type: String,
    },
    location: {
      type: String,
    },
    logo: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Created user id is required"],
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
