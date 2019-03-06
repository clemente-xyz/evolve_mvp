// import { schedule } from "node-cron";

import { Market } from "../../../../imports/collections";
import { cryptoxchangeService } from "../../../../imports/services";

const { getMarkets, getMarket } = cryptoxchangeService;

export default async () => {
  const markets = await getMarkets();
  markets.map(async ({ code, name, mainCurrency, secondaryCurrency }) => {
    const reducedMarket = {
      code,
      name,
      primaryCurrency: mainCurrency.code,
      secondaryCurrency: secondaryCurrency.code
    };

    await Market.create(reducedMarket);
  });
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
