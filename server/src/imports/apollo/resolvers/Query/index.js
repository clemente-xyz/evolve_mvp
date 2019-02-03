import CompanyQueryResolvers from "./Company";
import PaymentTxQueryResolvers from "./PaymentTx";

export default {
  ...CompanyQueryResolvers,
  ...PaymentTxQueryResolvers
};
