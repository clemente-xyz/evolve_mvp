import styled from "styled-components";
import { colors, helpers } from "../../utils";

const { WHITE } = colors;
const { stylesForSpecialDevice } = helpers;

const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: ${WHITE};
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: ${({ titleAlignment }) => titleAlignment};
  z-index: 10;

  ${stylesForSpecialDevice(
    "DESKTOP",
    `
    min-width: 300px;
  `,
  )}
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.2;
`;

const TitleContainer = styled.h1`
  font-size: 30px;
  margin-bottom: 50px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0;

  ${stylesForSpecialDevice(
    "SMARTPHONE",
    `
    flex-direction: column;
  `,
  )}
`;

export {
  Background,
  ButtonsContainer,
  CardContainer,
  MainContainer,
  TitleContainer,
};
