import { Fund, PaymentTx, Wallet } from "../../../../../collections";
import { getFundAmount, getWalletBalance } from "./helpers";
import helpers from "../../../../../helpers";

const { requestAuth } = helpers;

const createPayment = async (_, args, { user }) => {
  try {
    await requestAuth(user);

    const { receiverUser, amount, sendingCrypto, receivingCrypto } = args,
      { _id: userId } = user;

    const wallet = await Wallet.findOne({ owner: receiverUser }),
      fund = await Fund.create({
        wallet: wallet._id,
        currency: receivingCrypto,
        amount: await getFundAmount(sendingCrypto, receivingCrypto, amount)
      });

    await Wallet.updateOne(
      { owner: receiverUser },
      {
        balanceInClp: await getWalletBalance(
          sendingCrypto,
          receivingCrypto,
          wallet.balanceInClp,
          amount
        ),
        $push: { funds: fund }
      }
    );

    return PaymentTx.create({ ...args, senderUser: userId });
  } catch (error) {
    throw error;
  }
};

export default createPayment;
