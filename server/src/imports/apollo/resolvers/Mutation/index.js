import CompanyMutationResolvers from "./Company";
import FundMutationResolvers from "./Fund";
import PaymentTxMutationResolvers from "./PaymentTx";

export default {
  ...CompanyMutationResolvers,
  ...FundMutationResolvers,
  ...PaymentTxMutationResolvers
};
