import React from "react";
import { Container } from "./styles";

export default ({ type, value, handleChange }) => (
  <Container type={type} value={value} onChange={handleChange} />
);
