import { cryptoxchangeService } from "../../services";

const { getMarkets, getMarket } = cryptoxchangeService;

const populateMarkets = async MarketCollection => {
  const markets = await getMarkets();

  const newMarkets = await Promise.all(
    markets.map(async ({ code, name, mainCurrency, secondaryCurrency }) => {
      try {
        const marketDetails = await getMarket(code);

        //Orionx api ref error (buy end sell attr names changed)
        const primaryCurrencyBuyPrice = marketDetails.sell[0]
          ? marketDetails.sell[0].limitPrice
          : 0;

        const primaryCurrencySellPrice = marketDetails.buy[0]
          ? marketDetails.buy[0].limitPrice
          : 0;

        return {
          code,
          name,
          primaryCurrency: mainCurrency.code,
          secondaryCurrency: secondaryCurrency.code,
          primaryCurBuyPrice: primaryCurrencyBuyPrice,
          primaryCurSellPrice: primaryCurrencySellPrice
        };
      } catch (error) {
        throw error;
      }
    })
  );

  const populatedMarkets = await Promise.all(
    newMarkets.map(async newMarket => {
      try {
        return await MarketCollection.create(newMarket);
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

export default { populateMarkets, updateMarkets };
