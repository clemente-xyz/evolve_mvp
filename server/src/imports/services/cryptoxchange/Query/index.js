import Orionx from "orionx-sdk";

const getMarkets = () => {
  try {
    return Orionx.markets();
  } catch (error) {
    throw error;
  }
};

const getMarket = (code, market_order_limit = 1) => {
  try {
    return Orionx.marketOrderBook({
      marketCode: code,
      limit: market_order_limit
    });
  } catch (error) {
    throw error;
  }
};

export default { getMarkets, getMarket };
