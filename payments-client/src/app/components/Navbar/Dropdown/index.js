import React, { useState } from "react";
import { ApolloConsumer } from "react-apollo";
import { withRouter } from "react-router-dom";

import { Avatar, Menu } from "../../index";
import { icons } from "../../../utils";
import { DropdownButton, MainContainer } from "./styles";

const {
  DownArrow: DownArrowIcon,
  Exit: ExitIcon,
  Settings: SettingsIcon,
  Information: InformationIcon
} = icons;

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
      onClick: () => alert("Support"),
      icon: <InformationIcon />
    },
    {
      label: "Settings",
      onClick: () => alert("Settings"),
      icon: <SettingsIcon />
    },
    {
      label: "Sign out",
      onClick: handleSignOut,
      icon: <ExitIcon />
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
        <MainContainer>
          <Avatar />
          <DropdownButton onClick={handleMenuClick}>
            <DownArrowIcon />
          </DropdownButton>
          <Menu open={open} actions={actionsConstructor(history, client)} />
        </MainContainer>
      )}
    </ApolloConsumer>
  );
};

export default withRouter(Dropdown);
