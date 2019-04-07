import React, { useState } from "react";

import { Button, Card, TextInput } from "../../../components";
import { colors } from "../../../utils";
import { MainContainer, TextInputContainer } from "./styles";

const {
 DARK_GREEN, DARK_RED, GREEN, RED, WHITE,
} = colors;

export default () => {
  const [sendingCrypto, setSendingCrypto] = useState("");
  const [receivingCrypto, setReceivingCrypto] = useState("");
  const [amount, setAmount] = useState(0);
  const [receiverUser, setReceiverUser] = useState("");

  const handleInputChange = ({ target: { name: inputName, value: inputValue } }) => {
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

  const handleCreatePaymentTxClick = () => {
    alert("Create payment!");
  };

  return (
    <MainContainer>
      <Card
        title={{ text: "New Payment", alignment: "center" }}
        content={(
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
                type="text"
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
)}
        buttons={(
          <>
            <Button
              onClick={handleCreatePaymentTxClick}
              text="Confirm"
              backgroundColor={GREEN}
              hoverColor={DARK_GREEN}
              textColor={WHITE}
            />

            <Button
              onClick={handleCreatePaymentTxClick}
              text="Cancel"
              backgroundColor={RED}
              hoverColor={DARK_RED}
              textColor={WHITE}
            />
          </>
)}
      />
    </MainContainer>
  );
};
