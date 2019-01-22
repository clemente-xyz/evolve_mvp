import styled from "styled-components";
import { colors } from "../../utils";

const { light_gray, blue, white } = colors;

const Container = styled.input`
  padding: 10px;
  width: 100%;
  outline: none;
  box-sizing : border-box
  font-size: 15px;
  border: 1px solid ${light_gray}
  background-color: ${light_gray};
  border-radius: 5px;
  transition: 0.5s all;

  &:focus {
    border: 1px solid ${blue};
    background-color: ${white};
  }
`;

export { Container };
