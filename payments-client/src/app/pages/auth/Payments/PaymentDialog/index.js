/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";

import { MUTATIONS } from "../../../../apollo";
import { Dialog, TextInput } from "../../../../components";
import { MainContainer, TextInputContainer } from "./styles";

const { CREATE_PAYMENT } = MUTATIONS;

const PaymentsDialog = ({ createPaymentMutation }) => {
  const [sendingCrypto, setSendingCrypto] = useState("");
  const [receivingCrypto, setReceivingCrypto] = useState("");
  const [amount, setAmount] = useState("");
  const [receiverUser, setReceiverUser] = useState("");

  const handleInputChange = ({
    target: { name: inputName, value: inputValue }
  }) => {
    if (inputName === "sendingCrypto") {
      setSendingCrypto(inputValue);
    } else if (inputName === "receivingCrypto") {
      setReceivingCrypto(inputValue);
    } else if (inputName === "amount") {
      setAmount(inputValue);
    } else if (inputName === "receiverUser") {
      setReceiverUser(inputValue);
    }
  };

  const handleCreatePaymentTxClick = async () => {
    try {
      const {
        data: { createPayment }
      } = await createPaymentMutation({
        variables: {
          sendingCrypto,
          receivingCrypto,
          amount,
          receiverUser
        }
      });

      console.log(createPayment);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <MainContainer>
      <Dialog
        title={{ text: "New Payment", alignment: "center" }}
        content={
          <>
            <TextInputContainer>
              <TextInput
                name="sendingCrypto"
                type="text"
                value={sendingCrypto}
                placeholder="Sending Crypto"
                handleChange={handleInputChange}
              />
            </TextInputContainer>

            <TextInputContainer>
              <TextInput
                name="receivingCrypto"
                type="text"
                value={receivingCrypto}
                placeholder="Receiving Crypto"
                handleChange={handleInputChange}
              />
            </TextInputContainer>

            <TextInputContainer>
              <TextInput
                name="amount"
                type="number"
                value={amount}
                placeholder="Amount"
                handleChange={handleInputChange}
              />
            </TextInputContainer>

            <TextInputContainer>
              <TextInput
                name="receiverUser"
                type="text"
                value={receiverUser}
                placeholder="Receiver User"
                handleChange={handleInputChange}
              />
            </TextInputContainer>
          </>
        }
        confirmAction={{ title: "Confirm", action: handleCreatePaymentTxClick }}
        declineAction={{ title: "Close", action: () => alert("close dialog") }}
      />
    </MainContainer>
  );
};

PaymentsDialog.propTypes = {
  createPaymentMutation: PropTypes.func.isRequired
};

const PaymentWithApollo = () => (
  <Mutation mutation={CREATE_PAYMENT}>
    {(createPayment, { loading, error }) => {
      if (loading) return <p>Loading...</p>;

      if (error) return <p>Error!</p>;

      return <PaymentsDialog createPaymentMutation={createPayment} />;
    }}
  </Mutation>
);

export default PaymentWithApollo;
