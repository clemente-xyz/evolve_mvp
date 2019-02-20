import React from "react";

import {
  MainContainer,
  BrandContainer,
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
        <p key={path}>{label}</p>
      ))}
    </PagesContainer>
  </MainContainer>
);
