import styled from "styled-components";
import { colors } from "../../utils";

const { white } = colors;

const Container = styled.div`
  padding: 20px;
  backgound-color: ${white};
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export { Container };
