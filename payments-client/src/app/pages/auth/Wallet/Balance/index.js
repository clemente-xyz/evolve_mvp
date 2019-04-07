import React from "react";
import PropTypes from "prop-types";

import { Button, Card } from "../../../../components";
import { colors, helpers } from "../../../../utils";
import {
 AmountContainer, BalanceAmount, ButtonsContainer, ContentContainer,
} from "./styles";

const { formatAmount } = helpers;
const {
 WHITE, GREEN, DARK_GREEN, BLUE, DARK_BLUE,
} = colors;

const Balance = ({ balanceAmount }) => {
  const formatedBalanceAmount = formatAmount(balanceAmount);

  return (
    <Card
      title={{
        text: "Balance",
        alignment: "left",
      }}
      content={(
        <ContentContainer>
          <AmountContainer>
            <BalanceAmount>{formatedBalanceAmount}</BalanceAmount>
            CLP
          </AmountContainer>

          <ButtonsContainer>
            <Button
              text="Deposit"
              onClick={() => {
                alert("Deposit");
              }}
              textColor={WHITE}
              backgroundColor={BLUE}
              hoverColor={DARK_BLUE}
            />
            <Button
              text="Withdraw"
              onClick={() => {
                alert("Withdraw");
              }}
              textColor={WHITE}
              backgroundColor={GREEN}
              hoverColor={DARK_GREEN}
            />
          </ButtonsContainer>
        </ContentContainer>
)}
      buttons={null}
    />
  );
};

Balance.propTypes = {
  balanceAmount: PropTypes.number.isRequired,
};

export default Balance;
