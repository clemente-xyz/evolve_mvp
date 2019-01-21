import styled from "styled-components";
import { colors } from "../../utils";

const { gray, blue } = colors;

const Container = styled.input`
  outline: none;
  border: 1px solid ${gray};
  border-radius: 5px;
  padding: 10px;

  &:focus {
    border-color: ${blue};
  }
`;

export { Container };
