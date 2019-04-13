import React, { useState } from "react";

import { Button } from "../../../components";
import { colors } from "../../../utils";
import PaymentsDialog from "./PaymentDialog";

const { BLUE, DARK_BLUE, WHITE } = colors;

const Payments = () => {
  const [isPaymentDialogOpen, setPaymentDialogOpen] = useState(false);

  const handleOpenPaymentDialogClick = () => {
    setPaymentDialogOpen(!isPaymentDialogOpen);
  };

  return (
    <div>
      <Button
        onClick={handleOpenPaymentDialogClick}
        text="New payment"
        textColor={WHITE}
        backgroundColor={BLUE}
        hoverColor={DARK_BLUE}
      />
      {isPaymentDialogOpen && (
        <PaymentsDialog toggleOpen={handleOpenPaymentDialogClick} />
      )}
    </div>
  );
};

export default Payments;
