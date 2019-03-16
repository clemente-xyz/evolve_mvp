import { model, Schema } from "mongoose";

const FundSchema = new Schema(
  {
    wallet: {
      type: Schema.Types.ObjectId,
      ref: "Wallet",
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

export default model("Fund", FundSchema);
