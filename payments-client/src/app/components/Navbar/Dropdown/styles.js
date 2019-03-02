import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const DropdownButton = styled.button`
  background: none;
  margin-left: 10px;
  cursor: pointer;
  color: inherit;
  border: none;
  outline: inherit;
`;

export { DropdownButton, MainContainer };
