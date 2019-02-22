import React from "react";

import { MainContainer, Dot } from "./styles";

const NUM_OF_DOTS = 3;

export default ({ color }) => (
  <>
    <MainContainer>
      {[...Array(NUM_OF_DOTS)].map((_, i) => (
        <Dot key={i} delay={`0.${i}s`} backgroundColor={color} />
      ))}
    </MainContainer>
  </>
);
