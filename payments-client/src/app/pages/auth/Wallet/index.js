import React from "react";
import PropTypes from "prop-types";

import { FundsCard as Funds, MarketsCard as Markets } from "../../../components";
import Balance from "./Balance";
import {
 CryptoFundsContainer, BalanceContainer, MainContainer, MarketContainer,
} from "./styles";

const Wallet = ({ myData }) => {
  const {
    wallet: { balanceInClp: myBalance, funds: myFunds },
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

Wallet.propTypes = {
  myData: PropTypes.shape({
    wallet: PropTypes.shape({
      balanceInClp: PropTypes.number.isRequired,
      funds: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export default Wallet;
