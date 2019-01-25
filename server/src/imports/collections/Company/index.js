import mongoose, { Schema } from "mongoose";

const CompanySchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  orgName: String,
  avatar: String
});

export default mongoose.model("Company", CompanySchema);
