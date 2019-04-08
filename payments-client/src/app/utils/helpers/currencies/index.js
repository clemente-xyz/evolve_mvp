import React from "react";

import currencies from "../../theme/icons/Currencies";

const DECIMALS_TO_ROUND_AMOUNTS = 2;

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
  Tron,
} = currencies;

const currenciesIconsIndexation = {
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
  TRX: <Tron />,
};

const currenciesNamesIndexation = {
  BTC: "Bitcoin",
  BCH: "Bitcoin Cash",
  CHA: "Chaucha",
  DAI: "Dai",
  DASH: "Dash",
  ETH: "Ether",
  LTC: "Litecoin",
  LUK: "Luka",
  XRP: "Ripple",
  XLM: "Stellar",
  TRX: "Tron",
};

const getCurrencyNameAndIcon = code => {
  const currencyCode = code.toString();

  return {
    name: currenciesNamesIndexation[currencyCode],
    icon: currenciesIconsIndexation[currencyCode],
  };
};

const filterMarketsByPrimaryCur = (primaryCurFilter, markets) => markets.filter(({ name }) => {
    const marketPrimaryCur = name.split("/")[1];

    return marketPrimaryCur === primaryCurFilter;
  });

const formatAmount = amount => {
  const decimalsRoundedAmount = amount.toFixed(DECIMALS_TO_ROUND_AMOUNTS);
  const hundredthsRoundedAmount = decimalsRoundedAmount.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  return hundredthsRoundedAmount;
};

export default {
  filterMarketsByPrimaryCur,
  formatAmount,
  getCurrencyNameAndIcon,
};
