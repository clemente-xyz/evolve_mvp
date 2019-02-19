import React from "react";
import { MainContainer, ButtonsContainer } from "./styles";

export default ({ title, content, buttons }) => (
  <MainContainer>
    <h1>{title}</h1>
    {content}
    <ButtonsContainer>{buttons}</ButtonsContainer>
  </MainContainer>
);
