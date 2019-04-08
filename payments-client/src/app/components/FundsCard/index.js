import React from "react";
import PropTypes from "prop-types";

import { helpers } from "../../utils";
import Card from "../Card";
import {
  CurrencyDetailsContainer,
  CurrencyName,
  CurrencyIconContainer,
  FundDetailsContainer,
} from "./styles";

const { formatAmount, getCurrencyNameAndIcon } = helpers;

const FundsCard = ({ funds }) => (
  <Card
    title={{
      text: "Funds",
      alignment: "left",
    }}
    content={funds.map(({ _id, currency, amount }) => {
      const { name: currencyName, icon: currencyIcon } = getCurrencyNameAndIcon(currency);

      return (
        <FundDetailsContainer key={_id}>
          <CurrencyIconContainer>{currencyIcon}</CurrencyIconContainer>
          <CurrencyDetailsContainer>
            <CurrencyName>{currencyName}</CurrencyName>
            <div>
              {formatAmount(amount)}
              {" "}
              {currency}
            </div>
          </CurrencyDetailsContainer>
        </FundDetailsContainer>
      );
    })}
  />
);

FundsCard.propTypes = {
  funds: PropTypes.array.isRequired,
};

export default FundsCard;
