import mongoose, { Schema } from "mongoose";

const PaymentTxSchema = new Schema(
  {
    sendingCripto: {
      type: String,
      required: true
    },
    receivingCripto: {
      type: String,
      required: true
    },
    amountInUsd: {
      type: Number,
      required: true
    },
    senderUser: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true
    },
    receiverUser: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true
    },
    approved: Boolean
  },
  { timestamps: true }
);

export default mongoose.model("PaymentTx", PaymentTxSchema);
