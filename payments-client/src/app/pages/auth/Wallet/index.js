import React from "react";
import { Query } from "react-apollo";

import { QUERIES } from "../../../apollo";
import { Card, MarketsCard as Markets } from "../../../components";
import Balance from "./Balance";
import {
  CryptoFundsContainer,
  BalanceContainer,
  MainContainer,
  MarketContainer
} from "./styles";

const { GET_WALLET } = QUERIES;

const Wallet = ({ myData, myWallet }) => {
  const myBalance = myWallet.getWallet.balance;

  return (
    <MainContainer>
      <CryptoFundsContainer>
        <Card title="Funds" content={<p>Pending cryptos</p>} buttons={null} />
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

export default ({ myData }) => (
  <Query query={GET_WALLET} variables={{ ownerId: myData._id }}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;

      if (error) return <p>Error!</p>;

      return <Wallet myData={myData} myWallet={data} />;
    }}
  </Query>
);
