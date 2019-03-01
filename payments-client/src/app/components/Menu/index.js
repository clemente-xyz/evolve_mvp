import React from "react";

import { Container } from "./styles";

const DEFAULT_POSITION = "left";

export default ({ open, actions, position = DEFAULT_POSITION }) => {
  if (!open) return null;

  return (
    <Container>
      {actions.map(({ label, onClick }) => {
        if (typeof label === "string") {
          return (
            <button key={label} onClick={onClick}>
              {label}
            </button>
          );
        } else {
          return label;
        }
      })}
    </Container>
  );
};
