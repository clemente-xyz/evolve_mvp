/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";

import { MUTATIONS, QUERIES } from "../../../../apollo";
import { Dialog, TextInput } from "../../../../components";
import { MainContainer, TextInputContainer } from "./styles";

const { CREATE_PAYMENT } = MUTATIONS;
const { GET_MY_PAYMENTS } = QUERIES;

const NewPayment = ({ createPaymentMutation, toggleOpen }) => {
  const [sendingCrypto, setSendingCrypto] = useState("");
  const [receivingCrypto, setReceivingCrypto] = useState("");
  const [amount, setAmount] = useState(0);
  const [receiverUser, setReceiverUser] = useState("");

  const handleInputChange = ({
    target: { name: inputName, value: inputValue }
  }) => {
    if (inputName === "sendingCrypto") {
      setSendingCrypto(inputValue);
    } else if (inputName === "receivingCrypto") {
      setReceivingCrypto(inputValue);
    } else if (inputName === "amount") {
      setAmount(parseInt(inputValue));
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
        declineAction={{ title: "Close", action: toggleOpen }}
      />
    </MainContainer>
  );
};

NewPayment.propTypes = {
  createPaymentMutation: PropTypes.func.isRequired,
  toggleOpen: PropTypes.func.isRequired
};

const NewPaymentWithApollo = ({ toggleOpen }) => (
  <Mutation
    mutation={CREATE_PAYMENT}
    update={(cache, { data: { createPayment } }) => {
      const { getMyPayments } = cache.readQuery({ query: GET_MY_PAYMENTS });

      cache.writeQuery({
        query: GET_MY_PAYMENTS,
        data: { getMyPayments: getMyPayments.concat([createPayment]) }
      });
    }}
  >
    {(createPayment, { loading, error }) => {
      if (loading) return <p>Loading...</p>;

      if (error) return <p>Error!</p>;

      return (
        <NewPayment
          createPaymentMutation={createPayment}
          toggleOpen={toggleOpen}
        />
      );
    }}
  </Mutation>
);

export default NewPaymentWithApollo;
