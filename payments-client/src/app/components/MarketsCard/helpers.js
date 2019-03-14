const filterMarketsByPrimaryCur = (primaryCurFilter, markets) =>
  markets.filter(({ name }) => {
    const marketPrimaryCur = name.split("/")[1];

    return marketPrimaryCur === primaryCurFilter;
  });

export { filterMarketsByPrimaryCur };
