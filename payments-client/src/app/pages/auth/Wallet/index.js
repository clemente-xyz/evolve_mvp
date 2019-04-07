import React from "react";

import {
  FundsCard as Funds,
  MarketsCard as Markets
} from "../../../components";
import Balance from "./Balance";
import {
  CryptoFundsContainer,
  BalanceContainer,
  MainContainer,
  MarketContainer
} from "./styles";

export default ({ myData }) => {
  const {
    wallet: { balanceInClp: myBalance, funds: myFunds }
  } = myData;

  return (
    <MainContainer>
      <CryptoFundsContainer>
        <Funds funds={myFunds} />
      </CryptoFundsContainer>
      <BalanceContainer>
        <Balance balanceAmount={myBalance} />
      </BalanceContainer>
      <MarketContainer>
        <Markets />
      </MarketContainer>
    </MainContainer>
  );
};
