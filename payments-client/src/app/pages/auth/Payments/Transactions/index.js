/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";

import { QUERIES } from "../../../../apollo";
import { Card, Button } from "../../../../components";
import { MainContainer } from "./styles";
import { colors } from "../../../../utils";

const {} = QUERIES;
const { BLUE, DARK_BLUE, WHITE } = colors;

const Transactions = ({ newPaymentAction }) => (
  <Card
    title={{
      text: "Transactions",
      alignment: "left"
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
      </MainContainer>
    }
  />
);

Transactions.propTypes = {
  newPaymentAction: PropTypes.func.isRequired
};

export default Transactions;
