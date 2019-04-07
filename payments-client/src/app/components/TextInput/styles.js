import styled from "styled-components";
import { colors } from "../../utils";

const { LIGHT_GRAY, BLUE, WHITE } = colors;

const Container = styled.input`
  padding: 10px;
  width: 100%;
  outline: none;
  box-sizing: border-box;
  font-size: 15px;
  border: 1px solid ${LIGHT_GRAY};
  background-color: ${LIGHT_GRAY};
  border-radius: 5px;
  transition: 0.5s all;

  &:focus {
    border: 1px solid ${BLUE};
    background-color: ${WHITE};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Container };
