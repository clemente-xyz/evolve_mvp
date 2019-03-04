import Orionx from "orionx-sdk";

const getMarkets = async () => {
  try {
    return await Orionx.market({ code: "LTCBTC" });
  } catch (error) {
    throw error;
  }
};

export default { getMarkets };
