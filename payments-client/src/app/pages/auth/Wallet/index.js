import React from "react";
import { Query } from "react-apollo";

import { QUERIES } from "../../../apollo";
import { Card, MarketsCard } from "../../../components";
import {
  CryptoFundsContainer,
  BalanceContainer,
  MainContainer,
  MarketContainer
} from "./styles";

const { GET_WALLET } = QUERIES;

const Wallet = ({ userData, walletData }) => {
  return (
    <MainContainer>
      <CryptoFundsContainer>
        <Card
          title="Crypto funds"
          content={<p>Pending cryptos</p>}
          buttons={null}
        />
      </CryptoFundsContainer>
      <BalanceContainer>
        <Card
          title="Balance"
          content={<p>{walletData.getWallet.balance} CLP</p>}
          buttons={null}
        />
      </BalanceContainer>
      <MarketContainer>
        <MarketsCard />
      </MarketContainer>
    </MainContainer>
  );
};

export default ({ myData }) => (
  <Query query={GET_WALLET} variables={{ ownerId: myData._id }}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;

      if (error) return <p>Error!</p>;

      return <Wallet userData={myData} walletData={data} />;
    }}
  </Query>
);
