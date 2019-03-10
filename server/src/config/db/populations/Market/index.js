// import { schedule } from "node-cron";

import { Market } from "../../../../imports/collections";
import helpers from "../../../../imports/helpers";

const { populateMarkets, updateMarkets } = helpers;

export default async () => {
  const currentMarkets = await Market.find({});

  if (!currentMarkets) {
    populateMarkets(Market);
  }

  console.log("No markets updated");
  updateMarkets(Market);
};

// schedule("1 * * * * *", async () => {
//   Orionx.markets()
//     .then(function(market) {
//       console.log(market);
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// });

//Important: add method refreshData that will be called every time client calls GET_MARKETS query
