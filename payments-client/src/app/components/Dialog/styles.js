import styled from "styled-components";
import { colors, helpers } from "../../utils";

const { WHITE } = colors;
const { stylesForSpecialDevice } = helpers;

const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 80px 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: ${WHITE};
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: ${({ titleAlignment }) => titleAlignment};

  ${stylesForSpecialDevice(
    "DESKTOP",
    `
    min-width: 300px;
  `,
  )}
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
  // eslint-disable-next-line no-trailing-spaces
  ButtonsContainer,
  CardContainer,
  MainContainer,
  TitleContainer,
};