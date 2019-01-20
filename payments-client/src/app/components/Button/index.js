import React from "react";
import { Container } from "./styles";

export default ({ onClick, text, textColor, backgroundColor, hoverColor }) => (
  <Container
    onClick={onClick}
    textColor={textColor}
    backgroundColor={backgroundColor}
    hoverColor={hoverColor}
  >
    {text}
  </Container>
);
