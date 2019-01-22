import React, { useState } from "react";
import { MainContainer, TextInputContainer } from "./styles";
import { Modal, Button, TextInput } from "../../components";
import { colors } from "../../utils";

const SignUp = () => {
  const [username, setUsername] = useState("");

  const { blue, dark_blue, white } = colors;

  const handleInputsChange = event => {
    setUsername(event.target.value);
  };

  return (
    <MainContainer>
      <Modal
        title="Sign up"
        content={
          <>
            <TextInputContainer>
              <TextInput value={username} handleChange={handleInputsChange} />
            </TextInputContainer>
            <TextInputContainer>
              <TextInput value={username} handleChange={handleInputsChange} />
            </TextInputContainer>
            <TextInputContainer>
              <TextInput value={username} handleChange={handleInputsChange} />
            </TextInputContainer>
          </>
        }
        buttons={
          <Button
            onClick={() => alert(username)}
            text="Register"
            backgroundColor={blue}
            hoverColor={dark_blue}
            textColor={white}
          />
        }
      />
    </MainContainer>
  );
};

export default SignUp;
