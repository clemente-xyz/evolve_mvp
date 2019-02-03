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
      type: String,
      //type: Schema.Types.ObjectId,
      //ref: "Company",
      required: true
    },
    receiverUser: {
      type: String,
      //type: Schema.Tyoes.ObjectId,
      //ref: "Company",
      required: true
    },
    approved: Boolean
  },
  { timestamps: true }
);

export default mongoose.model("PaymentTx", PaymentTxSchema);
