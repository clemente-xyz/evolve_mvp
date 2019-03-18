import { Fund } from "../../../../../collections";
import helpers from "../../../../../helpers";

const { getCurrencyEquivalence } = helpers;

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
    async (acc, { currenciesEquivalence, amount }) => {
      return acc + amount * currenciesEquivalence;
    },
    0
  );
};
// Promise.all(
//   funds.reduce(async (acc, { currency: primaryCurrency, amount }) => {
//     const currencyEquivalence = await getCurrencyEquivalence(
//       primaryCurrency,
//       secondaryCurrency
//     );

//     return acc + amount * currencyEquivalence;
//   }, 0)
// );

export default async ({ _id }) => {
  try {
    const funds = await Fund.find({ wallet: _id });

    return getBalance(funds);
  } catch (error) {
    throw error;
  }
};
