import styled from "styled-components";

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
  margin: 10px 0;
`;

const DateContainer = styled.div`
  flex: 0.1;
`;
const RecipientContainer = styled.div`
  flex: 0.25;
`;

const AmountContainer = styled.div`
  flex: 0.25;
  font-weight: 700;
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
