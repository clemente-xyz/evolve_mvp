import COMPANY_QUERIES from "./Company";
import FUND_QUERIES from "./Fund";
import MARKET_QUERIES from "./Market";
import PAYMENTTX_QUERIES from "./PaymentTx";
import WALLET_QUERIES from "./Wallet";

export default {
  ...COMPANY_QUERIES,
  ...FUND_QUERIES,
  ...MARKET_QUERIES,
  ...PAYMENTTX_QUERIES,
  ...WALLET_QUERIES,
};
