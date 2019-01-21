import React from "react";
import { Container } from "./styles";

export default ({ value, handleChange }) => (
  <Container type="text" value={value} onChange={handleChange} />
);
