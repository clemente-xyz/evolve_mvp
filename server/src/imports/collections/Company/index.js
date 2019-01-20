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
  orgName: String
});

export default mongoose.model("Company", CompanySchema);
