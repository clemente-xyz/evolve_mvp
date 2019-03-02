import styled from "styled-components";

const Svg = styled.svg`
  &:hover {
    fill: ${({ hoverColor }) => hoverColor};
  }
`;

export { Svg };
