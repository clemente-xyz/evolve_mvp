import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

export default app => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
  });

  return <ApolloProvider client={client}>{app}</ApolloProvider>;
};
