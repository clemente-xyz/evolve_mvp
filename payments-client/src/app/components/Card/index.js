import React from "react";
import { MainContainer, ButtonsContainer } from "./styles";

export default ({ title, content, buttons }) => {
  const { text: titleText, alignment: titleAlignment } = title;

  return (
    <MainContainer titleAlignment={titleAlignment}>
      <h1>{titleText}</h1>
      {content}
      <ButtonsContainer>{buttons}</ButtonsContainer>
    </MainContainer>
  );
};
