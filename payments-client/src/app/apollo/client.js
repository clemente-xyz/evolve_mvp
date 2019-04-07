import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { withSession } from "../components";

export default app => {
  const client = new ApolloClient({
    // eslint-disable-next-line no-undef
    uri: process.env.REACT_APP_API_ENDPOINT,
    fetchOptions: {
      credentials: "include",
    },
    request: operation => {
      const token = localStorage.getItem("token");

      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : "",
        },
      });
    },
    onError: ({ networkError }) => {
      if (networkError) {
        console.log("networkError : ", networkError);
      }
    },
  });

  const AppWithSession = withSession(app);

  return (
    <ApolloProvider client={client}>
      <AppWithSession />
    </ApolloProvider>
  );
};
