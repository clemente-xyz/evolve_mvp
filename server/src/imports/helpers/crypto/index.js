import { cryptoxchangeService } from "../../services";

const { getMarkets, getMarket } = cryptoxchangeService;

const populateMarkets = async MarketCollection => {
	const markets = await getMarkets();

	const newMarkets = await Promise.all(
		markets.map(async ({ code, name, mainCurrency, secondaryCurrency }) => {
			const marketDetails = await getMarket(code);

			const primaryCurrencyBuyPrice = marketDetails.buy[0].limitPrice,
				primaryCurrencySellPrice = marketDetails.sell[0].limitPrice;

			const reducedMarket = {
				code,
				name,
				primaryCurrency: mainCurrency.code,
				secondaryCurrency: secondaryCurrency.code,
				primaryCurrencyPrices: {
					buy: primaryCurrencyBuyPrice,
					sell: primaryCurrencySellPrice
				}
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
		console.log("updating markets...");
		await MarketCollection.deleteMany({});

		populateMarkets(MarketCollection);
	} catch (error) {
		return error;
	}
};

export default { populateMarkets, updateMarkets };
