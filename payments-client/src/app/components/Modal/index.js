import React from "react";
import { Container } from "./styles";

export default ({ title, content, buttons }) => (
  <Container>
    <h1>{title}</h1>
    <p>{content}</p>
    {buttons}
  </Container>
);
