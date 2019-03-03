import Orionx from "orionx-sdk";

const getMarket = async code => {
  try {
    return await Orionx.market({ code });
  } catch (error) {
    throw error;
  }
};

export default { getMarket };
