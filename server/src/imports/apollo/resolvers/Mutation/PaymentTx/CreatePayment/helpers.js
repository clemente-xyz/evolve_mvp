import helpers from "../../../../../helpers";

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

export { getFundAmount, getWalletBalance };
