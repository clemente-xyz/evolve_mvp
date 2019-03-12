import mongoose, { Schema } from "mongoose";
import { hashSync, compareSync } from "bcrypt-nodejs";
import jwt from "jsonwebtoken";

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
	},
	auth(password) {
		return compareSync(password, this.password);
	},
	createToken() {
		return jwt.sign(
			{
				_id: this._id
			},
			process.env.JWT_SECRET
		);
	}
};

export default mongoose.model("Company", CompanySchema);
