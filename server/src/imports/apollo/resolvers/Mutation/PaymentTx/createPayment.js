import { Fund, PaymentTx, Wallet } from "../../../../collections";
import helpers from "../../../../helpers";

const { getCurrencyEquivalence, requestAuth } = helpers;

const getFundAmount = async (sendingCrypto, receivingCrypto, amount) => {
  const currenciesEquivalence = await getCurrencyEquivalence(
    sendingCrypto,
    receivingCrypto
  );

  return amount * currenciesEquivalence;
};

const getWalletBalance = async (
  sendingCrypto,
  receivingCrypto,
  oldBalance,
  paymentAmount
) => {
  const cursEquivalenceFactorForSendingCrypto = await getCurrencyEquivalence(
    sendingCrypto,
    receivingCrypto
  );
  const cursEquivalenceFactorForClp = await getCurrencyEquivalence(
    receivingCrypto,
    "CLP"
  );

  return (
    oldBalance +
    paymentAmount *
      cursEquivalenceFactorForClp *
      cursEquivalenceFactorForSendingCrypto
  );
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
