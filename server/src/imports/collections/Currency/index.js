import { model, Schema } from "mongoose";

const CurrencySchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true
		},
		units: {
			type: Number,
			required: true
		},
		type: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

export default model("Currency", CurrencySchema);
