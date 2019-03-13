import CompanyQueryResolvers from "./Company";
import MarketQueryResolvers from "./Market";
import PaymentTxQueryResolvers from "./PaymentTx";
import WalletQueryResolvers from "./Wallet";

export default {
	...CompanyQueryResolvers,
	...MarketQueryResolvers,
	...PaymentTxQueryResolvers,
	...WalletQueryResolvers
};
