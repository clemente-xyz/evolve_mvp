import React from "react";
import { Container } from "./styles";

export default ({ type, value, placeholder, handleChange }) => (
  <Container
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={handleChange}
  />
);
