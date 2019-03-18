import CompanyQueryResolvers from "./Company";
import FundQueryResolvers from "./Fund";
import MarketQueryResolvers from "./Market";
import PaymentTxQueryResolvers from "./PaymentTx";
import WalletQueryResolvers from "./Wallet";

export default {
  ...CompanyQueryResolvers,
  ...FundQueryResolvers,
  ...MarketQueryResolvers,
  ...PaymentTxQueryResolvers,
  ...WalletQueryResolvers
};
