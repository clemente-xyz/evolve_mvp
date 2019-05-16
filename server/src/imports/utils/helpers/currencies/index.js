import { cryptoxchangeService } from "../../../services";

const { getMarkets } = cryptoxchangeService;

const populateMarkets = async MarketCollection => {
  const markets = await getMarkets();

  const populatedMarkets = await Promise.all(
    markets.map(async newMarket => {
      try {
        const { primaryCurrency, secondaryCurrency } = newMarket;
        return await MarketCollection.create({
          ...newMarket,
          primaryCurrency: primaryCurrency.code,
          secondaryCurrency: secondaryCurrency.code
        });
      } catch (error) {
        throw error;
      }
    })
  );

  return populatedMarkets;
};

const updateMarkets = async MarketCollection => {
  try {
    await MarketCollection.deleteMany({});

    await populateMarkets(MarketCollection);

    console.log("📊 Markets updated!");
  } catch (error) {
    throw error;
  }
};

const getCurrencyEquivalence = async (primaryCurrency, secondaryCurrency) => {
  try {
    const markets = await getMarkets();

    const matchedMarket = markets.filter(market => {
      const {
        primaryCurrency: { code: reducedPrimaryCur },
        secondaryCurrency: { code: reducedSecondaryCur }
      } = market;

      if (
        reducedPrimaryCur === primaryCurrency &&
        reducedSecondaryCur === secondaryCurrency
      ) {
        return market;
      }
    });

    return matchedMarket[0].marketSellPrice;
  } catch (error) {
    throw error;
  }
};

export default {
  getCurrencyEquivalence,
  populateMarkets,
  updateMarkets
};
