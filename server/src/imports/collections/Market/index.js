import { model, Schema } from "mongoose";
// import { schedule } from "node-cron";

// import { cryptoxchangeService } from "../../services";

// const { getMarkets, getMarket } = cryptoxchangeService;

const MarketSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    primaryCurrency: {
      type: String, //Schema.Types.ObjectId
      //ref: Currency
      required: true
    },
    secondaryCurrency: {
      type: String, //Schema.Types.ObjectId
      //ref: Currency
      required: true
    }
  },
  { timestamps: true }
);

// const populateCollection = async () => {
//   const markets = await getMarkets();
//   const reducedMarkets = reduceMarkets(markets);

//   console.log(reducedMarkets);
// };

// const reduceMarkets = markets =>
//   markets.map(({ code, name, mainCurrency, secondaryCurrency }) => ({
//     code,
//     name,
//     primaryCurrency: mainCurrency.code,
//     secondaryCurrency: secondaryCurrency.code
//   }));

// console.log(populateCollection());

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

export default model("Market", MarketSchema);
