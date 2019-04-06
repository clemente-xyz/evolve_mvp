import Orionx from "orionx-sdk";

const getMarkets = () => {
  try {
    return Orionx.markets();
  } catch (error) {
    throw error;
  }
};

const getMarket = async (code, market_order_limit = 1) => {
  try {
    const receivedMarket = await Orionx.market({ code });

    const receivedMarketOrderBook = await Orionx.marketOrderBook({
      marketCode: code,
      limit: market_order_limit
    });

    //Orionx api ref error (buy end sell attr names changed)
    const receivedMarketSellPrice = receivedMarketOrderBook.buy[0].limitPrice,
      receivedMarketBuyPrice = receivedMarketOrderBook.sell[0].limitPrice;

    const converterFactor = receivedMarket.secondaryCurrency.format
      .split(".")[1]
      .match(/0/gi).length;

    const marketSellPrice =
        receivedMarketSellPrice * Math.pow(10, -1 * converterFactor),
      marketBuyPrice =
        receivedMarketBuyPrice * Math.pow(10, -1 * converterFactor);

    const market = {
      name: receivedMarket.name,
      code: receivedMarket.code,
      marketSellPrice,
      marketBuyPrice,
      primaryCurrency: receivedMarket.mainCurrency,
      secondaryCurrency: receivedMarket.secondaryCurrency
    };

    console.log({
      market
    });
  } catch (error) {
    throw error;
  }
};

getMarket("ETHBTC");

export default { getMarkets, getMarket };
