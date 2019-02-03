import { PaymentTx } from "../../../../../collections";

export default (_, args) => {
  try {
    return PaymentTx.create(args);
  } catch (error) {
    throw error;
  }
};
