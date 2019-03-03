import CompanyQueryResolvers from "./Company";
import PaymentTxQueryResolvers from "./PaymentTx";
import WalletQueryResolvers from "./Wallet";

export default {
  ...CompanyQueryResolvers,
  ...PaymentTxQueryResolvers,
  ...WalletQueryResolvers
};
