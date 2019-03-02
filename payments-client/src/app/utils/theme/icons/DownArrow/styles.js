import styled from "styled-components";

const Svg = styled.svg`
  &:hover {
    fill: ${props => props.hoverColor};
  }

  &:focus {
    height: 20px;
    fill: ${props => props.hoverColor};
  }
`;

export { Svg };
