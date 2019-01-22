import React from "react";
import { MainContainer } from "./styles";

export default ({ title, content, buttons }) => (
  <MainContainer>
    <h1>{title}</h1>
    <p>{content}</p>
    {buttons}
  </MainContainer>
);
