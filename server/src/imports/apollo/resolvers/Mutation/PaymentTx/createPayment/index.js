import { PaymentTx } from "../../../../../collections";
import helpers from "../../../../../helpers";

const { requestAuth } = helpers;

export default async (_, args, { user }) => {
  try {
    await requestAuth(user);
    return PaymentTx.create({ ...args, senderUser: user._id });
  } catch (error) {
    throw error;
  }
};
