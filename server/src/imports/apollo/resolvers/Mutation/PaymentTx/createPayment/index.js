import { Fund, PaymentTx, Wallet } from "../../../../../collections";
import helpers from "../../../../../helpers";

const { getCurrencyEquivalence, requestAuth } = helpers;

const getFundAmount = async (sendingCrypto, receivingCrypto, amount) => {
  const currenciesEquivalence = await getCurrencyEquivalence(
    sendingCrypto,
    receivingCrypto
  );

  return amount * currenciesEquivalence;
};

const getWalletBalance = wallet => {
  const oldBalance = wallet.balanceInClp;

  return oldBalance + 300;
};

export default async (_, args, { user }) => {
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
      { balanceInClp: getWalletBalance(wallet), $push: { funds: fund } }
    );

    return PaymentTx.create({ ...args, senderUser: userId });
  } catch (error) {
    throw error;
  }
};
