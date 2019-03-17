import CompanyMutationResolvers from "./Company";
import FundMutationResolvers from "./Fund";
import PaymentTxMutationResolvers from "./PaymentTx";
import WalletMutationResolvers from "./Wallet";

export default {
  ...CompanyMutationResolvers,
  ...FundMutationResolvers,
  ...PaymentTxMutationResolvers,
  ...WalletMutationResolvers
};
