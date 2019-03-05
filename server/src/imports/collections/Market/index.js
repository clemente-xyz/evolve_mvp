import { model, Schema } from "mongoose";
// import { schedule } from "node-cron";
// import Orionx from "orionx-sdk";

import { cryptoxchangeService } from "../../services";

const { getMarket } = cryptoxchangeService;

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

const populateCollection = async () => {
  const res = await getMarket("BTCCLP");
  console.log(res);
};

populateCollection();

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
