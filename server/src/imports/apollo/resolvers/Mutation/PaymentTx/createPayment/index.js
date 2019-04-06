import { Fund, PaymentTx, Wallet } from "../../../../../collections";
import helpers from "../../../../../helpers";

const { getCurrencyEquivalence, requestAuth } = helpers;

const getBalance = async (funds, secondaryCurrency = "CLP") => {
  const currenciesEquivalencesAndAmounts = funds.map(
    async ({ currency: primaryCurrency, amount }) => {
      const currenciesEquivalence = await getCurrencyEquivalence(
        primaryCurrency,
        secondaryCurrency
      );

      return {
        currenciesEquivalence,
        amount
      };
    }
  );
  const _currenciesEquivalences = await Promise.all(
    currenciesEquivalencesAndAmounts
  );

  return _currenciesEquivalences.reduce(
    (acc, { currenciesEquivalence, amount }) => {
      return acc + amount * currenciesEquivalence;
    },
    0
  );
};

export default async (_, args, { user }) => {
  try {
    const { receiverUser, amountInUsd, sendingCripto, receivingCripto } = args,
      { _id: userId } = user;

    await requestAuth(user);

    const wallet = await Wallet.findOne({ owner: receiverUser }),
      fund = await Fund.create({
        wallet: wallet._id,
        currency: receivingCripto,
        amount: amountInUsd * 2
      });

    await Wallet.updateOne(
      { owner: receiverUser },
      { balance: amountInUsd, $push: { funds: fund } }
    );

    return PaymentTx.create({ ...args, senderUser: userId });
  } catch (error) {
    throw error;
  }
};
