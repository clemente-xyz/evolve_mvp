import COMPANY_MUTATIONS from "./Company";
import PAYMENTTX_MUTATIONS from "./PaymentTx";
import WALLET_MUTATIONS from "./Wallet";

export default {
  ...COMPANY_MUTATIONS,
  ...PAYMENTTX_MUTATIONS,
  ...WALLET_MUTATIONS,
};
