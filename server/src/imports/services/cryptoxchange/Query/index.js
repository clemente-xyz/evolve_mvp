import Orionx from "orionx-sdk";

const getMarket = code => {
  try {
    return Orionx.marketOrderBook({ marketCode: code, limit: 5 });
  } catch (error) {
    throw error;
  }
};

export default { getMarket };
