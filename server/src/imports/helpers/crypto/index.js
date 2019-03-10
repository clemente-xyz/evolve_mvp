import { cryptoxchangeService } from "../../services";

const { getMarkets, getMarket } = cryptoxchangeService;

const populateMarkets = async MarketCollection => {
  const markets = await getMarkets();

  markets.map(async ({ code, name, mainCurrency, secondaryCurrency }) => {
    const marketDetails = await getMarket(code);

    const primaryCurrencyBuyPrice = marketDetails.buy[0].limitPrice,
      primaryCurrencySellPrice = marketDetails.sell[0].limitPrice;

    const reducedMarket = {
      code,
      name,
      primaryCurrency: mainCurrency.code,
      secondaryCurrency: secondaryCurrency.code,
      primaryCurrencyPrices: {
        buy: primaryCurrencyBuyPrice,
        sell: primaryCurrencySellPrice
      }
    };
    const newMarket = await MarketCollection.create(reducedMarket);

    console.log("Created market: ", newMarket);
  });
};

const updateMarkets = async MarketCollection => {
  try {
    await MarketCollection.deleteMany({});

    populateMarkets(MarketCollection);
  } catch (error) {
    return error;
  }
};

export default { populateMarkets, updateMarkets };
