const findNewMarketPrices = (newMarkets, code) =>
  newMarkets.find(newMarket => newMarket.code === code);

const updateMarkets = (currentMarkets, getMarketFunction) => {
  if (currentMarkets.length === 0) return null;

  return Promise.all(
    currentMarkets.map(async ({ code }) => {
      const marketDetails = await getMarketFunction(code);
      return {
        code,
        buy: marketDetails.buy[0].limitPrice,
        sell: marketDetails.sell[0].limitPrice
      };
    })
  ).then(newMarkets =>
    currentMarkets.reduce(
      (acc, { code, primaryCurrencyPrices: { buy, sell } }) => {
        const newMarketPrices = findNewMarketPrices(newMarkets, code);

        if (newMarketPrices.sell !== sell) {
          acc.push({
            code,
            sell
          });
        }

        if (newMarketPrices.buy !== buy) {
          acc.push({
            code,
            buy
          });
        }

        return acc;
      },
      []
    )
  );
};

export default { findNewMarketPrices, updateMarkets };
