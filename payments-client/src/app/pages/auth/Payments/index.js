import React, { useState } from "react";

import { Button, MarketsCard as Markets } from "../../../components";
import { colors } from "../../../utils";
import NewPayment from "./NewPayment";
import {
  MainContainer,
  TrasactionsContainer,
  MarketsContainer,
} from "./styles";

const { BLUE, DARK_BLUE, WHITE } = colors;

const Payments = () => {
  const [isPaymentDialogOpen, setPaymentDialogOpen] = useState(false);

  const handleOpenPaymentDialogClick = () => {
    setPaymentDialogOpen(!isPaymentDialogOpen);
  };

  return (
    <MainContainer>
      <TrasactionsContainer>
        <Button
          onClick={handleOpenPaymentDialogClick}
          text="New payment"
          textColor={WHITE}
          backgroundColor={BLUE}
          hoverColor={DARK_BLUE}
        />
      </TrasactionsContainer>
      <MarketsContainer>
        <Markets />
      </MarketsContainer>

      {isPaymentDialogOpen && (
        <NewPayment toggleOpen={handleOpenPaymentDialogClick} />
      )}
    </MainContainer>
  );
};

export default Payments;
