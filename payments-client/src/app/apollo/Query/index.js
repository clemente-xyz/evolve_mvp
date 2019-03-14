import COMPANY_QUERIES from "./Company";
import MARKET_QUERIES from "./Market";
import WALLET_QUERIES from "./Wallet";

export default {
  ...COMPANY_QUERIES,
  ...MARKET_QUERIES,
  ...WALLET_QUERIES
};
