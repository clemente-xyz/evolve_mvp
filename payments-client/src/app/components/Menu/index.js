import React from "react";

import { IconContainer, LabelContainer, Label, MainContainer } from "./styles";

const DEFAULT_POSITION = "left";

export default ({ open, actions, position = DEFAULT_POSITION }) => {
  if (!open) return null;

  return (
    <MainContainer>
      {actions.map(({ label, icon, onClick }) => (
        <LabelContainer key={label} onClick={onClick}>
          <Label>
            {icon ? <IconContainer>{icon}</IconContainer> : null}
            {label}
          </Label>
        </LabelContainer>
      ))}
    </MainContainer>
  );
};
