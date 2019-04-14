import { PaymentTx } from "../../../../../collections";
import helpers from "../../../../../helpers";

const { requestAuth } = helpers;

const getMyPayments = async (_, args, { user: me }) => {
  try {
    await requestAuth(me);

    const myPayments = await PaymentTx.find({ senderUser: me._id });

    return myPayments;
  } catch (error) {
    throw error;
  }
};

export default getMyPayments;
