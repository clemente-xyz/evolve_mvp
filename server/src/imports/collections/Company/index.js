import mongoose, { Schema } from "mongoose";
import { hashSync } from "bcrypt-nodejs";

const CompanySchema = new Schema(
  {
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
  },
  { timestamps: true }
);

CompanySchema.pre("save", function(next) {
  if (this.isModified("password")) {
    this.password = this._hashPassword(this.password);
    return next();
  }

  return next();
});

CompanySchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  }
};

export default mongoose.model("Company", CompanySchema);
