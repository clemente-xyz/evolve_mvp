import React from "react";

import { Button, Card } from "../../../../components";
import { colors, helpers } from "../../../../utils";
import {
  AmountContainer,
  BalanceAmount,
  ButtonsContainer,
  ContentContainer
} from "./styles";

const { formatAmount } = helpers;
const { white, green, dark_green, blue, dark_blue } = colors;

export default ({ balanceAmount }) => {
  const formatedBalanceAmount = formatAmount(balanceAmount);

  return (
    <Card
      title={{
        text: "Balance",
        alignment: "left"
      }}
      content={
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
              textColor={white}
              backgroundColor={blue}
              hoverColor={dark_blue}
            />
            <Button
              text="Withdraw"
              onClick={() => {
                alert("Withdraw");
              }}
              textColor={white}
              backgroundColor={green}
              hoverColor={dark_green}
            />
          </ButtonsContainer>
        </ContentContainer>
      }
      buttons={null}
    />
  );
};
