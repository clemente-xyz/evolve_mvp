import { PaymentTx, Wallet } from "../../../../../collections";
import helpers from "../../../../../helpers";

const { requestAuth } = helpers;

export default async (_, args, { user }) => {
  try {
    await requestAuth(user);

    await Wallet.updateOne({ owner: user._id }, { balance: 45 });

    return PaymentTx.create({ ...args, senderUser: user._id });
  } catch (error) {
    throw error;
  }
};
