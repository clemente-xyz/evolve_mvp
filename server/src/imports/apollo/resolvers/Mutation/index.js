import CompanyMutationResolvers from "./Company";
import PaymentTxMutationResolvers from "./PaymentTx";
import WalletMutationResolvers from "./Wallet";

export default {
	...CompanyMutationResolvers,
	...PaymentTxMutationResolvers,
	...WalletMutationResolvers
};
