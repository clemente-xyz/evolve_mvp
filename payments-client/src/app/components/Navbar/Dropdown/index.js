import React, { useState } from "react";
import { ApolloConsumer } from "react-apollo";
import { withRouter } from "react-router-dom";

import { Avatar, Menu } from "../../index";
import { Container } from "./styles";

const actionsConstructor = (history, client) => {
  const handleSignOut = () => {
    localStorage.clear();
    client.resetStore();
    history.push("/");
  };
  return [
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
      onClick: handleSignOut
    }
  ];
};

const Dropdown = ({ history }) => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <ApolloConsumer>
      {client => (
        <Container>
          <Avatar />
          <button onClick={handleMenuClick}>+</button>
          <Menu open={open} actions={actionsConstructor(history, client)} />
        </Container>
      )}
    </ApolloConsumer>
  );
};

export default withRouter(Dropdown);
