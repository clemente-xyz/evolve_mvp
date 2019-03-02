import React from "react";

import { constants } from "../../utils";
import Dropdown from "./Dropdown";
import { Logo } from "../../assets";
import {
  MainContainer,
  BrandContainer,
  BrandText,
  LinkContainer,
  PagesContainer,
  LogoContainer
} from "./styles";

const BRAND = "evolve",
  { AUTH_LINKS, NON_AUTH_LINKS } = constants;

export default ({ myData }) => (
  <MainContainer>
    <BrandContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <BrandText>{BRAND}</BrandText>
    </BrandContainer>
    <PagesContainer>
      {!myData ? (
        NON_AUTH_LINKS.map(({ path, label }) => (
          <LinkContainer exact key={path} to={path}>
            {label}
          </LinkContainer>
        ))
      ) : (
        <>
          {AUTH_LINKS.map(({ label, path }) => (
            <LinkContainer exact key={path} to={path}>
              {label}
            </LinkContainer>
          ))}
          <Dropdown myUsername={myData.username} />
        </>
      )}
    </PagesContainer>
  </MainContainer>
);
