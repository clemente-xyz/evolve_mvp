import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { colors } from "../../utils";

const {
 BLACK, WHITE, DARK_GRAY, LIGHT_GRAY, BLUE,
} = colors;

const MainContainer = styled.header`
  display: flex;
  background-color: ${WHITE};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  padding: 0px 40px;
`;

const BrandContainer = styled.div`
  display: flex;
  flex: 0.7;
  align-items: center;
`;

const BrandText = styled.p`
  font-weight: 900;
`;

const PagesContainer = styled.div`
  display: flex;
  flex: 0.3;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin-right: 10px;
  width: 30px;
  height: 30px;
`;

const LinkContainer = styled(NavLink)`
  text-decoration: none;
  color: ${BLACK};
  height: 100%;
  line-height: 3;

  &:hover {
    color: ${DARK_GRAY};
  }
  &:active {
    color: ${LIGHT_GRAY};
  }
  &.${props => props.activeClassName} {
    border-bottom: 2px solid ${BLUE};
    transition: border 0.2s;
  }
`;

LinkContainer.defaultProps = {
  activeClassName: "active",
};

export {
 MainContainer, BrandContainer, BrandText, LinkContainer, PagesContainer, LogoContainer,
};
