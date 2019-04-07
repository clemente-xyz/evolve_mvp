import styled from "styled-components";
import { colors } from "../../utils";

const { WHITE } = colors;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: ${WHITE};
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: ${({ titleAlignment }) => titleAlignment};
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0;
`;

export { MainContainer, ButtonsContainer };
