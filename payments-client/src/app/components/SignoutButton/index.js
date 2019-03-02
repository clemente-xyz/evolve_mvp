import React from "react";
import { ApolloConsumer } from "react-apollo";
import { withRouter } from "react-router-dom";

import { MainContainer } from "./styles";

const handleSignoutClick = (history, client) => {
  localStorage.clear();
  client.resetStore();
  history.push("/");
};

const SignoutButton = ({ history }) => {
  return (
    <ApolloConsumer>
      {client => (
        <MainContainer onClick={() => handleSignoutClick(history, client)}>
          Sign out
        </MainContainer>
      )}
    </ApolloConsumer>
  );
};

export default withRouter(SignoutButton);
