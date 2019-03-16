import styled from "styled-components";

const Container = styled.button`
  padding: 10px 25px;
  font-size: 15px;
  font-weight: 500;
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  border-radius: 5px;
  transition: all 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
    top: 1px;
    -webkit-transform: translateY(-1px);
    -ms-transform: translateY(-1px);
    transform: translateY(-1px);
    cursor: pointer;
  }

  &:active {
    outline: none;
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }
`;

export { Container };
