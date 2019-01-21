import React, { useState } from "react";
import { Container } from "./styles";
import { Modal, Button, TextInput } from "../../components";
import { colors } from "../../utils";

const SignUp = () => {
  const [username, setUsername] = useState("");

  const { blue, dark_blue, white } = colors;

  const handleInputsChange = event => {
    setUsername(event.target.value);
  };

  return (
    <Container>
      <Modal
        title="Sign up"
        content={
          <TextInput value={username} handleChange={handleInputsChange} />
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
    </Container>
  );
};

export default SignUp;
