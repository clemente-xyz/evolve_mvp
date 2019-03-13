import { cryptoxchangeService } from "../../services";

const { getMarkets, getMarket } = cryptoxchangeService;

const populateMarkets = async MarketCollection => {
	const markets = await getMarkets();

	const newMarkets = await Promise.all(
		markets.map(async ({ code, name, mainCurrency, secondaryCurrency }) => {
			const marketDetails = await getMarket(code);

			//Orionx api ref error (buy end sell attr names changed)
			const primaryCurrencyBuyPrice = marketDetails.sell[0].limitPrice,
				primaryCurrencySellPrice = marketDetails.buy[0].limitPrice;

			const reducedMarket = {
				code,
				name,
				primaryCurrency: mainCurrency.code,
				secondaryCurrency: secondaryCurrency.code,
				primaryCurBuyPrice: primaryCurrencyBuyPrice,
				primaryCurSellPrice: primaryCurrencySellPrice
			};

			return reducedMarket;
		})
	);

	return await Promise.all(
		newMarkets.map(async newMarket => await MarketCollection.create(newMarket))
	);
};

const updateMarkets = async MarketCollection => {
	try {
		console.log("📊 Updating markets...");

		await MarketCollection.deleteMany({});

		populateMarkets(MarketCollection);
	} catch (error) {
		return error;
	}
};

export default { populateMarkets, updateMarkets };
