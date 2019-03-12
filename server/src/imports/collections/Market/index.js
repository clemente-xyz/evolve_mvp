import { model, Schema } from "mongoose";

const MarketSchema = new Schema(
	{
		code: {
			type: String,
			required: true,
			unique: true
		},
		name: {
			type: String,
			required: true
		},
		primaryCurrency: {
			type: String, //Schema.Types.ObjectId
			//ref: Currency
			required: true
		},
		secondaryCurrency: {
			type: String, //Schema.Types.ObjectId
			//ref: Currency
			required: true
		},
		primaryCurrencyPrices: {
			buy: {
				type: Number,
				required: true
			},
			sell: {
				type: Number,
				required: true
			}
		}
	},
	{ timestamps: true }
);

export default model("Market", MarketSchema);
