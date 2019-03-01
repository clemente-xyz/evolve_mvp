import React, { useState } from "react";

import { Avatar, SignoutButton, Menu } from "../../index";
import { Container } from "./styles";

const actions = [
  {
    label: "Signed in as ...",
    onClick: null
  },
  {
    label: "Support",
    onClick: () => alert("Support")
  },
  {
    label: "Settings",
    onClick: () => alert("Settings")
  },
  {
    label: "Sign out",
    onClick: () => alert("Sign out")
    // include <SignoutButton /> as label
  }
];

export default () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <Container>
      <Avatar />
      <button onClick={handleMenuClick}>+</button>
      <Menu open={open} actions={actions} />
    </Container>
  );
};
