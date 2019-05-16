import { Fund, PaymentTx, Wallet } from "../../../../../collections";
import helpers from "../../../../../utils/helpers";

const { getCurrencyEquivalence } = helpers;

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

const updateCompanyPaymentsData = async (
  paySide,
  userId,
  userWallet,
  preWallet,
  preFund,
  sendingCrypto,
  receivingCrypto,
  amount
) => {
  const newBalanceInClp = await getWalletBalance(
    sendingCrypto,
    receivingCrypto,
    userWallet.balanceInClp,
    amount
  );

  const newFundAmount = await getFundAmount(
    sendingCrypto,
    receivingCrypto,
    amount
  );

  if (!preFund) {
    const fund = await Fund.create({
      wallet: userWallet._id,
      currency: receivingCrypto,
      amount: newFundAmount
    });

    await Wallet.updateOne(
      { owner: userId },
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

  //return PaymentTx.create({ ...args, senderUser: userId });
};

export { getFundAmount, getWalletBalance };
