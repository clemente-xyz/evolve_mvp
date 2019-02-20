import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { colors } from "../../utils";

const { black, white, dark_gray, light_gray, blue } = colors;

const MainContainer = styled.header`
  display: flex;
  background-color: ${white};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  padding: 0px 40px;
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
  align-items: center;
`;

const LogoContainer = styled.div`
  margin-right: 40px;
`;

const LinkContainer = styled(NavLink)`
  text-decoration: none;
  color: ${black};
  height: 100%;
  line-height: 3;

  &:hover {
    color: ${dark_gray};
  }
  &:active {
    color: ${light_gray};
  }
  &.${props => props.activeClassName} {
    border-bottom: 2px solid ${blue};
    transition: border 0.2s;
  }
`;

LinkContainer.defaultProps = {
  activeClassName: "active"
};

export {
  MainContainer,
  BrandContainer,
  LinkContainer,
  PagesContainer,
  LogoContainer
};
