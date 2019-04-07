import Orionx from "orionx-sdk";

const getMarket = async (code, market_order_limit = 1) => {
  try {
    const receivedMarket = await Orionx.market({ code });

    const receivedMarketOrderBook = await Orionx.marketOrderBook({
      marketCode: code,
      limit: market_order_limit
    });

    if (!receivedMarket) return;

    //Orionx api ref error (buy end sell attr names changed)
    const receivedMarketSellPrice = receivedMarketOrderBook.buy[0]
        ? receivedMarketOrderBook.buy[0].limitPrice
        : 0,
      receivedMarketBuyPrice = receivedMarketOrderBook.sell[0]
        ? receivedMarketOrderBook.sell[0].limitPrice
        : 0;

    const conversionFactor =
      receivedMarket.secondaryCurrency.format.split(",")[1].match(/0/g).length -
      1;

    const marketSellPrice =
        receivedMarketSellPrice * Math.pow(10, -1 * conversionFactor),
      marketBuyPrice =
        receivedMarketBuyPrice * Math.pow(10, -1 * conversionFactor);

    return {
      code: receivedMarket.code,
      name: receivedMarket.name,
      marketSellPrice,
      marketBuyPrice,
      primaryCurrency: receivedMarket.mainCurrency,
      secondaryCurrency: receivedMarket.secondaryCurrency
    };
  } catch (error) {
    throw error;
  }
};

const getMarkets = async () => {
  try {
    const receivedMarkets = await Orionx.markets();

    const markets = await Promise.all(
      receivedMarkets.map(async ({ code }) => {
        try {
          return await getMarket(code);
        } catch (error) {
          throw error;
        }
      })
    );

    return markets;
  } catch (error) {
    throw error;
  }
};

export default { getMarkets, getMarket };
