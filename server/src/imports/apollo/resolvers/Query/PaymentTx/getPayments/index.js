import { PaymentTx } from "../../../../../collections";

export default () => {
  try {
    return PaymentTx.find({});
  } catch (error) {
    throw error;
  }
};
