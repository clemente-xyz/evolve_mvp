/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import dayjs from "dayjs";

import { QUERIES } from "../../../../apollo";
import { Card, Button } from "../../../../components";
import {
  AmountContainer,
  ButtonContainer,
  DateContainer,
  MainContainer,
  ReceivingCryptoContainer,
  RecipientContainer,
  SendingCryptoContainer,
  TransactionContainer,
  TransactionsHeaderContainer,
} from "./styles";
import { colors } from "../../../../utils";

const { GET_MY_PAYMENTS } = QUERIES;
const {
  // eslint-disable-next-line comma-dangle
  BLUE,
  DARK_BLUE,
  DARK_GREEN,
  WHITE,
} = colors;

const Transactions = ({ newPaymentAction, transactions }) => (
  <Card
    title={{
      text: "Transactions",
      alignment: "left",
    }}
    content={
      <MainContainer>
        <ButtonContainer>
          <Button
            onClick={newPaymentAction}
            text="New payment"
            textColor={WHITE}
            backgroundColor={BLUE}
            hoverColor={DARK_BLUE}
          />
        </ButtonContainer>
        <TransactionsHeaderContainer>
          <DateContainer>Date</DateContainer>
          <RecipientContainer>Recipient</RecipientContainer>
          <AmountContainer>Amount</AmountContainer>
          <SendingCryptoContainer>Sending crypto</SendingCryptoContainer>
          <ReceivingCryptoContainer>Receiving crypto</ReceivingCryptoContainer>
        </TransactionsHeaderContainer>
        {transactions.map(
          ({
            amount,
            createdAt,
            _id,
            receivingCrypto,
            receiverUser: { username },
            sendingCrypto,
          }) => (
            <TransactionContainer key={_id}>
              <DateContainer>
                {dayjs(createdAt).format("MM/DD/YY")}
              </DateContainer>
              <RecipientContainer>{username}</RecipientContainer>
              <AmountContainer style={{ color: DARK_GREEN }}>
                {amount}
              </AmountContainer>
              <SendingCryptoContainer>{sendingCrypto}</SendingCryptoContainer>
              <ReceivingCryptoContainer>
                {receivingCrypto}
              </ReceivingCryptoContainer>
            </TransactionContainer>
          ),
        )}
      </MainContainer>
    }
  />
);

const TransactionsWithApollo = ({ newPaymentAction }) => (
  <Query query={GET_MY_PAYMENTS}>
    {({ loading, error, data: { getMyPayments: transactions } }) => {
      if (loading) return <p>Loading...</p>;

      if (error) return <p>Error!</p>;

      return (
        <Transactions
          newPaymentAction={newPaymentAction}
          transactions={transactions}
        />
      );
    }}
  </Query>
);

Transactions.propTypes = {
  newPaymentAction: PropTypes.func.isRequired,
  transactions: PropTypes.array.isRequired,
};

TransactionsWithApollo.propTypes = {
  newPaymentAction: PropTypes.func.isRequired,
};

export default TransactionsWithApollo;
