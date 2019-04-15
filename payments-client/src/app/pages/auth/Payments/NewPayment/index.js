import React, { useState } from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";

import { MUTATIONS, QUERIES } from "../../../../apollo";
import { Dialog, TextInput } from "../../../../components";
import { MainContainer, TextInputContainer } from "./styles";

const { CREATE_PAYMENT } = MUTATIONS;
const { GET_MY_PAYMENTS } = QUERIES;

const NewPayment = ({
  createPaymentMutation,
  errorState,
  loadingState,
  toggleOpen,
}) => {
  const [sendingCrypto, setSendingCrypto] = useState("");
  const [receivingCrypto, setReceivingCrypto] = useState("");
  const [amount, setAmount] = useState("");
  const [receiverUser, setReceiverUser] = useState("");

  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const handleInputChange = ({
    target: { name: inputName, value: inputValue },
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
        data: { createPayment },
      } = await createPaymentMutation({
        variables: {
          sendingCrypto,
          receivingCrypto,
          amount: parseInt(amount),
          receiverUser,
        },
      });

      setShowSuccessMsg(true);
      setSendingCrypto("");
      setReceivingCrypto("");
      setAmount("");
      setReceiverUser("");

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

            {loadingState && <p>Loading...</p>}

            {showSuccessMsg && <p>Success!</p>}

            {errorState && <p>Error :(</p>}
          </>
        }
        confirmAction={{ title: "Confirm", action: handleCreatePaymentTxClick }}
        declineAction={{ title: "Close", action: toggleOpen }}
      />
    </MainContainer>
  );
};

const NewPaymentWithApollo = ({ toggleOpen }) => (
  <Mutation
    mutation={CREATE_PAYMENT}
    update={(cache, { data: { createPayment } }) => {
      const { getMyPayments } = cache.readQuery({ query: GET_MY_PAYMENTS });

      cache.writeQuery({
        query: GET_MY_PAYMENTS,
        data: { getMyPayments: getMyPayments.concat([createPayment]) },
      });
    }}
  >
    {(createPayment, { loading, error }) => (
      <NewPayment
        createPaymentMutation={createPayment}
        errorState={error}
        loadingState={loading}
        toggleOpen={toggleOpen}
      />
    )}
  </Mutation>
);

NewPayment.defaultProps = {
  errorState: undefined,
  loadingState: undefined,
};

NewPayment.propTypes = {
  createPaymentMutation: PropTypes.func.isRequired,
  errorState: PropTypes.any,
  loadingState: PropTypes.any,
  toggleOpen: PropTypes.func.isRequired,
};

NewPaymentWithApollo.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
};

export default NewPaymentWithApollo;
