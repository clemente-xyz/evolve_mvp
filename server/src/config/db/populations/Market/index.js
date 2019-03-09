// import { schedule } from "node-cron";

import { Market } from "../../../../imports/collections";
import helpers from "../../../../imports/helpers";
import { cryptoxchangeService } from "../../../../imports/services";

const { getUpdatedMarkets } = helpers;
const { getMarkets, getMarket } = cryptoxchangeService;

export default async () => {
  const markets = await getMarkets();

  const currentMarkets = await Market.find({});

  const updatedMarkets = await getUpdatedMarkets(currentMarkets, getMarket);

  !updatedMarkets
    ? markets.map(async ({ code, name, mainCurrency, secondaryCurrency }) => {
        const marketDetails = await getMarket(code);

        const primaryCurrencyBuyPrice = marketDetails.buy[0].limitPrice,
          primaryCurrencySellPrice = marketDetails.sell[0].limitPrice;

        const reducedMarket = {
          code,
          name,
          primaryCurrency: mainCurrency.code,
          secondaryCurrency: secondaryCurrency.code,
          primaryCurrencyPrices: {
            buy: primaryCurrencyBuyPrice,
            sell: primaryCurrencySellPrice
          }
        };

        await Market.create(reducedMarket);
      })
    : console.log("collection already populated");
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
