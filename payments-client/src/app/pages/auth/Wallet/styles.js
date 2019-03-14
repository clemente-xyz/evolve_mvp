import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 50px;
`;

const CryptoFundsContainer = styled.div`
  flex: 0.3;
  margin-right: 20px;
`;

const BalanceContainer = styled.div`
  flex: 0.4;
  margin-right: 20px;
`;

const MarketContainer = styled.div`
  flex: 0.3;
`;

export {
  CryptoFundsContainer,
  BalanceContainer,
  MainContainer,
  MarketContainer
};
