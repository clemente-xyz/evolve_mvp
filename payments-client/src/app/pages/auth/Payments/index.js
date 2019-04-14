import React, { useState } from "react";

import { MarketsCard as Markets } from "../../../components";
import Transactions from "./Transactions";
import NewPayment from "./NewPayment";
import {
  MainContainer,
  TrasactionsContainer,
  MarketsContainer,
} from "./styles";

const Payments = () => {
  const [isPaymentDialogOpen, setPaymentDialogOpen] = useState(false);

  const handleOpenPaymentDialogClick = () => {
    setPaymentDialogOpen(!isPaymentDialogOpen);
  };

  return (
    <MainContainer>
      <TrasactionsContainer>
        <Transactions newPaymentAction={handleOpenPaymentDialogClick} />
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
