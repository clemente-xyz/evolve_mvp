import styled from "styled-components";
import { colors } from "../../utils";

const { white } = colors;

const MainContainer = styled.header`
  display: flex;
  background-color: ${white};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  padding: 10px 40px;
`;

const BrandContainer = styled.div`
  display: flex;
  flex: 0.7;
  align-items: center;
`;

const PagesContainer = styled.div`
  display: flex;
  flex: 0.3;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  margin-right: 10px;
`;

export { MainContainer, BrandContainer, PagesContainer, LogoContainer };
