import styled from "styled-components";

import { colors } from "../../utils";

const { light_gray } = colors;

const MarketDetailsContainer = styled.div`
  display: flex;
  padding: 15px 40px;
  align-items: center;
  margin: 0 -40px;

  &:hover {
    background-color: ${light_gray};
  }
`;

const CurrencyDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 14px;
  cursor: default;
`;

const CurrencyIconContainer = styled.div`
  margin-right: 10px;
  cursor: default;
`;

const CurrencyName = styled.div`
  margin-bottom: 3px;
  cursor: default;
`;

export {
  CurrencyDetailsContainer,
  CurrencyName,
  CurrencyIconContainer,
  MarketDetailsContainer
};
