import React from "react";
import PropTypes from "prop-types";

import { ButtonsContainer, MainContainer, TitleContainer } from "./styles";

const Card = ({ title, content, buttons }) => {
  const { text: titleText, alignment: titleAlignment } = title;

  return (
    <MainContainer titleAlignment={titleAlignment}>
      <TitleContainer>{titleText}</TitleContainer>
      {content}
      <ButtonsContainer>{buttons}</ButtonsContainer>
    </MainContainer>
  );
};

Card.defaultProps = {
  title: null,
  buttons: null,
};

Card.propTypes = {
  title: PropTypes.shape({
    text: PropTypes.string.isRequired,
    alignment: PropTypes.string.isRequired,
  }),
  content: PropTypes.node.isRequired,
  buttons: PropTypes.node,
};

export default Card;
