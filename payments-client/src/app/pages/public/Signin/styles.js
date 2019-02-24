import styled from "styled-components";
import { colors } from "../../../utils";

const { red } = colors;

const MainContainer = styled.div`
  padding: 60px 15%;
  @media (min-width: 700px) {
    padding: 60px 35%;
  }
`;

const TextInputContainer = styled.div`
  margin-bottom: 10px;
`;

const ErrorText = styled.p`
  color: ${red};
`;

export { ErrorText, MainContainer, TextInputContainer };
