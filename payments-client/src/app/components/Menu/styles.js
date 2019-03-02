import styled from "styled-components";

import { colors } from "../../utils";

const { dark_gray, light_gray, white } = colors;

const MainContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 55px;
  right: 35px;
  padding: 10px 0;
  border-radius: 5px;
  background-color: ${white};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const LabelContainer = styled.div`
  cursor: pointer;

  &:hover {
    background-color: ${light_gray};
    width: 100%;
  }
`;

const Label = styled.div`
  display: flex;
  padding: 15px 20px;
  font-size: 15px;
  color: ${dark_gray};
`;

const Hr = styled.hr`
  width: 100%;
  border: 1px solid ${light_gray};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export { MainContainer, LabelContainer, Label, Hr, IconContainer };
