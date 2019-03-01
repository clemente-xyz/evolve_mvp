import styled from "styled-components";

import { colors } from "../../utils";

const { white } = colors;

const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 55px;
  right: 35px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${white};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export { Container };
