import React from "react";
import PropTypes from "prop-types";

import { helpers } from "../../utils";
import Card from "../Card";

const { formatAmount } = helpers;

const FundsCard = ({ funds }) => (
  <Card
    title={{
      text: "Funds",
      alignment: "left",
    }}
    content={funds.map(({ _id, currency, amount }) => (
      <p key={_id}>
        {formatAmount(amount)}
        {currency}
      </p>
    ))}
  />
);

FundsCard.propTypes = {
  funds: PropTypes.array.isRequired,
};

export default FundsCard;
