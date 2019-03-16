import React from "react";

import { Button, Card } from "../../../../components";
import { colors } from "../../../../utils";

const { white, green, dark_green, blue, dark_blue } = colors;

export default ({ balanceAmount }) => {
  return (
    <Card
      title="Balance"
      content={<p>{balanceAmount} CLP</p>}
      buttons={
        <>
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
        </>
      }
    />
  );
};
