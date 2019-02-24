import React from "react";
import { ApolloConsumer } from "react-apollo";
import { withRouter } from "react-router-dom";

import { MainContainer } from "./styles";

const handleSignoutClick = (client, history) => {
  localStorage.clear();
  client.resetStore();
  history.push("/");
};

const SignoutButton = ({ history }) => {
  return (
    <ApolloConsumer>
      {client => (
        <MainContainer onClick={() => handleSignoutClick(client, history)}>
          Sign out
        </MainContainer>
      )}
    </ApolloConsumer>
  );
};

export default withRouter(SignoutButton);
