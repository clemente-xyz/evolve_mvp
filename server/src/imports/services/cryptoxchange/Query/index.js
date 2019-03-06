import Orionx from "orionx-sdk";

const getMarkets = () => {
  try {
    return Orionx.markets();
  } catch (error) {
    throw error;
  }
};

const getMarket = code => {
  try {
    return Orionx.marketOrderBook({ marketCode: code, limit: 5 });
  } catch (error) {
    throw error;
  }
};

export default { getMarkets, getMarket };
