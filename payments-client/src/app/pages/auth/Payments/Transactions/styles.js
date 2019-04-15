import styled from "styled-components";

import { colors } from "../../../../utils";

const { LIGHT_GRAY } = colors;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  width: 300px;
`;

const TransactionsHeaderContainer = styled.div`
  display: flex;
  margin: 40px 0 20px 0;
  font-weight: 700;
`;

const TransactionContainer = styled.div`
  display: flex;
  padding: 15px 40px;
  margin: 0 -40px;
  &:hover {
    background-color: ${LIGHT_GRAY};
  }
`;

const DateContainer = styled.div`
  flex: 0.1;
  cursor: default;
`;

const RecipientContainer = styled.div`
  flex: 0.25;
  cursor: default;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AmountContainer = styled.div`
  flex: 0.25;
  cursor: default;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SendingCryptoContainer = styled.div`
  flex: 0.2;
`;

const ReceivingCryptoContainer = styled.div`
  flex: 0.2;
`;

export {
  AmountContainer,
  ButtonContainer,
  DateContainer,
  MainContainer,
  ReceivingCryptoContainer,
  RecipientContainer,
  SendingCryptoContainer,
  TransactionContainer,
  TransactionsHeaderContainer,
};
