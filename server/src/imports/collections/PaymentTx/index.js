import mongoose, { Schema } from "mongoose";

const PaymentTxSchema = new Schema(
  {
    sendingCrypto: {
      type: String,
      required: true
    },
    receivingCrypto: {
      type: String,
      required: true
    },
    amount: {
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
