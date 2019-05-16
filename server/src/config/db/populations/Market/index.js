// import { schedule } from "node-cron";

import { Market } from "../../../../imports/collections";
import helpers from "../../../../imports/utils/helpers";

const { populateMarkets, updateMarkets } = helpers;

export default async () => {
  const currentMarkets = await Market.find({});

  if (!currentMarkets || currentMarkets.length === 0) {
    populateMarkets(Market);
  }

  // else {
  // 	updateMarkets(Market);
  // }
};

//Important: add method refreshData that will be called every time client calls GET_MARKETS query
