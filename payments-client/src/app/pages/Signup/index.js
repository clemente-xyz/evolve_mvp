import React from "react";
import { Container } from "./styles";
import { Modal, Button } from "../../components";
import { colors } from "../../utils";

export default () => {
  const { blue, dark_blue, white } = colors;

  return (
    <Container>
      <Modal
        title="Sign up"
        content="Here you will sign up!"
        buttons={
          <Button
            onClick={() => alert("You are signup!")}
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
