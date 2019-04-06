import { model, Schema } from "mongoose";

const WalletSchema = new Schema(
  {
    balanceInClp: {
      type: String,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
      unique: true
    },
    funds: {
      type: [Schema.Types.ObjectId],
      ref: "Fund"
    }
    // transactions: {
    //   type: [Schema.Types.ObjectId],
    //   ref: "WalletTx",
    // }
  },
  { timestamps: true }
);

WalletSchema.pre("save", function(next) {
  if (this.isNew) {
    this.balanceInClp = 0;

    return next();
  }

  return next();
});

export default model("Wallet", WalletSchema);
