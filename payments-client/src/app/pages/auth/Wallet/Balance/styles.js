import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AmountContainer = styled.div`
  flex: 0.6;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex: 0.7;
  justify-content: space-between;
`;

const BalanceAmount = styled.span`
  font-weight: 900;
  margin-right: 10px;
`;

export {
 AmountContainer, BalanceAmount, ButtonsContainer, ContentContainer,
};
