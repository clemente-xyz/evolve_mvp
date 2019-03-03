import { model, Schema } from "mongoose";

const WalletSchema = new Schema(
  {
    balance: {
      type: String,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
      unique: true
    }
    // transactions: {
    //   type: [Schema.Types.ObjectId],
    //   ref: "WalletTx",
    // }
  },
  { timestamps: true }
);

export default model("Wallet", WalletSchema);