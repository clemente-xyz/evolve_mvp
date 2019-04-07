import React, { useState } from "react";

import { Button, Card, TextInput } from "../../../components";
import { colors } from "../../../utils";
import { MainContainer, TextInputContainer } from "./styles";

const { dark_green, dark_red, green, red, white } = colors;

export default () => {
  const [sendingCrypto, setSendingCrypto] = useState(""),
    [receivingCrypto, setReceivingCrypto] = useState(""),
    [amount, setAmount] = useState(0),
    [receiverUser, setReceiverUser] = useState("");

  const handleInputChange = ({
    target: { name: inputName, value: inputValue }
  }) => {
    if (inputName === "sendingCrypto") {
      setSendingCrypto(inputValue);
    }

    if (inputName === "receivingCrypto") {
      setReceivingCrypto(inputValue);
    }

    if (inputName === "amount") {
      setAmount(inputValue);
    }

    if (inputName === "receiverUser") {
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
        }
        buttons={
          <>
            <Button
              onClick={handleCreatePaymentTxClick}
              text="Confirm transaction"
              backgroundColor={green}
              hoverColor={dark_green}
              textColor={white}
            />

            <Button
              onClick={handleCreatePaymentTxClick}
              text="Cancel transaction"
              backgroundColor={red}
              hoverColor={dark_red}
              textColor={white}
            />
          </>
        }
      />
    </MainContainer>
  );
};
