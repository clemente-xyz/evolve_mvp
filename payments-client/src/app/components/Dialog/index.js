import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import Portal from "../Portal";
import { colors } from "../../utils";
import {
  Background,
  ButtonsContainer,
  CardContainer,
  MainContainer,
  TitleContainer,
} from "./styles";

const {
  // eslint-disable-next-line no-trailing-spaces
  BLUE,
  DARK_BLUE,
  DARK_GREEN,
  GREEN,
  WHITE,
} = colors;

const Dialog = ({
  // eslint-disable-next-line no-trailing-spaces
  title,
  content,
  confirmAction,
  declineAction,
}) => {
  const { text: titleText, alignment: titleAlignment } = title;
  const {
    title: confirmActionTitle,
    action: confirmActionFunc,
  } = confirmAction;
  const {
    title: declineActionTitle,
    action: declineActionFunc,
  } = declineAction;

  return (
    <Portal>
      <MainContainer>
        <CardContainer titleAlignment={titleAlignment}>
          <TitleContainer>{titleText}</TitleContainer>
          {content}
          <ButtonsContainer>
            {confirmAction && (
              <Button
                onClick={confirmActionFunc}
                text={confirmActionTitle}
                textColor={WHITE}
                backgroundColor={GREEN}
                hoverColor={DARK_GREEN}
              />
            )}

            <Button
              onClick={declineActionFunc}
              text={declineActionTitle}
              textColor={WHITE}
              backgroundColor={BLUE}
              hoverColor={DARK_BLUE}
            />
          </ButtonsContainer>
        </CardContainer>
        <Background onClick={declineActionFunc} />
      </MainContainer>
    </Portal>
  );
};

Dialog.defaultProps = {
  title: null,
  confirmAction: null,
};

Dialog.propTypes = {
  title: PropTypes.shape({
    text: PropTypes.string.isRequired,
    alignment: PropTypes.string.isRequired,
  }),

  content: PropTypes.node.isRequired,

  confirmAction: PropTypes.shape({
    title: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }),

  declineAction: PropTypes.shape({
    title: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }).isRequired,
};

export default Dialog;
