import styled from "styled-components";

const MarketDetailsContainer = styled.div`
  display: flex;
  margin: 15px 0;
  align-items: center;
`;

const CurrencyDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 14px;
`;

const CurrencyIconContainer = styled.div`
  margin-right: 10px;
`;

const CurrencyName = styled.div`
  margin-bottom: 3px;
`;

export {
  CurrencyDetailsContainer,
  CurrencyName,
  CurrencyIconContainer,
  MarketDetailsContainer
};
