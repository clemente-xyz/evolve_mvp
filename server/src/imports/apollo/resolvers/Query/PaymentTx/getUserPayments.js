import { PaymentTx } from "../../../../collections";
import helpers from "../../../../helpers";

const { requestAuth } = helpers;

const getUserPayments = async (_, { senderUser }, { user }) => {
  try {
    await requestAuth(user);

    const userPayments = await PaymentTx.find({ senderUser });

    return userPayments;
  } catch (error) {
    throw error;
  }
};

export default getUserPayments;
