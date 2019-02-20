import React from "react";

import {
  MainContainer,
  BrandContainer,
  LinkContainer,
  PagesContainer,
  LogoContainer
} from "./styles";

export default ({ logo, brand, links }) => (
  <MainContainer>
    <BrandContainer>
      <LogoContainer>{logo}</LogoContainer>
      <p>{brand}</p>
    </BrandContainer>
    <PagesContainer>
      {links.map(({ path, label }) => (
        <LinkContainer exact key={path} to={path}>
          {label}
        </LinkContainer>
      ))}
    </PagesContainer>
  </MainContainer>
);
