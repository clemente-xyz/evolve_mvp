import React from "react";
import { Container } from "./styles";

export default ({ name, type, value, placeholder, handleChange }) => (
  <Container
    name={name}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={handleChange}
  />
);
