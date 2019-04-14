/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";

import { QUERIES } from "../../../../apollo";
import { Card, Button } from "../../../../components";
import { MainContainer } from "./styles";
import { colors } from "../../../../utils";

const { GET_MY_PAYMENTS } = QUERIES;
const { BLUE, DARK_BLUE, WHITE } = colors;

const Transactions = ({ newPaymentAction, transactions }) => (
  <Card
    title={{
      text: "Transactions",
      alignment: "left",
    }}
    content={
      <MainContainer>
        <Button
          onClick={newPaymentAction}
          text="New payment"
          textColor={WHITE}
          backgroundColor={BLUE}
          hoverColor={DARK_BLUE}
        />
        {transactions.map(
          ({
            amount,
            createdAt,
            _id,
            receivingCrypto,
            receiverUser: { username },
            sendingCrypto,
          }) => (
            <div key={_id}>
              <hr />
              <p>Amount: {amount}</p>
              <p>createdAt: {createdAt}</p>
              <p>receivingCrypto: {receivingCrypto}</p>
              <p>username: {username}</p>
              <p>sendingCrypto: {sendingCrypto}</p>
            </div>
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
