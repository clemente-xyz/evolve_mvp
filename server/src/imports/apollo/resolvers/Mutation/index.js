import CompanyMutationResolvers from "./Company";
import PaymentTxMutationResolvers from "./PaymentTx";

export default {
  ...CompanyMutationResolvers,
  ...PaymentTxMutationResolvers
};
