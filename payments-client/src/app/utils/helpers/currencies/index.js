import React from "react";

import currencies from "../../theme/icons/Currencies";

const {
  Bitcoin,
  BitcoinCash,
  Chaucha,
  Dai,
  Dash,
  Ether,
  Litecoin,
  Luka,
  Ripple,
  Stellar,
  Tron
} = currencies;

const currenciesIndexation = {
  BTC: <Bitcoin />,
  BCH: <BitcoinCash />,
  CHA: <Chaucha />,
  DAI: <Dai />,
  DASH: <Dash />,
  ETH: <Ether />,
  LTC: <Litecoin />,
  LUK: <Luka />,
  XRP: <Ripple />,
  XLM: <Stellar />,
  TRX: <Tron />
};

const getCurrencyIcon = code => {
  const currencyCode = code.toString();

  return currenciesIndexation[currencyCode];
};

const filterMarketsByPrimaryCur = (primaryCurFilter, markets) =>
  markets.filter(({ name }) => {
    const marketPrimaryCur = name.split("/")[1];

    return marketPrimaryCur === primaryCurFilter;
  });

export default {
  filterMarketsByPrimaryCur,
  getCurrencyIcon
};
