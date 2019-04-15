import { Fund, PaymentTx, Wallet } from "../../../../../collections";
import { getFundAmount, getWalletBalance } from "./helpers";
import helpers from "../../../../../helpers";

const { requestAuth } = helpers;

const createPayment = async (_, args, { user }) => {
  try {
    await requestAuth(user);

    const { receiverUser, amount, sendingCrypto, receivingCrypto } = args,
      { _id: userId } = user;

    const wallet = await Wallet.findOne({ owner: receiverUser });
    const newBalanceInClp = await getWalletBalance(
      sendingCrypto,
      receivingCrypto,
      wallet.balanceInClp,
      amount
    );
    const preFund = await Fund.findOne({
      wallet: wallet._id,
      currency: receivingCrypto
    });
    const newFundAmount = await getFundAmount(
      sendingCrypto,
      receivingCrypto,
      amount
    );

    if (!preFund) {
      const fund = await Fund.create({
        wallet: wallet._id,
        currency: receivingCrypto,
        amount: newFundAmount
      });

      await Wallet.updateOne(
        { owner: receiverUser },
        {
          balanceInClp: newBalanceInClp,
          $push: { funds: fund }
        }
      );
    } else {
      await Fund.updateOne(
        {
          _id: preFund._id
        },
        {
          amount: preFund.amount + newFundAmount
        }
      );
    }

    return PaymentTx.create({ ...args, senderUser: userId });
  } catch (error) {
    throw error;
  }
};

export default createPayment;
