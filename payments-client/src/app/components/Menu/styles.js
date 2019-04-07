import styled from "styled-components";

import { colors } from "../../utils";

const { DARK_GRAY, LIGHT_GRAY, WHITE } = colors;

const MainContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 55px;
  right: 35px;
  padding: 10px 0;
  border-radius: 5px;
  background-color: ${WHITE};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const LabelContainer = styled.div`
  cursor: pointer;

  &:hover {
    background-color: ${LIGHT_GRAY};
    width: 100%;
  }
`;

const Label = styled.div`
  display: flex;
  padding: 10px 20px;
  font-size: 15px;
  color: ${DARK_GRAY};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export {
 MainContainer, LabelContainer, Label, IconContainer,
};
