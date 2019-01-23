import React from "react";
import client from "./apollo/client";
import { Signup } from "./pages";
import { ApolloProvider } from "react-apollo";

const App = () => (
  <ApolloProvider client={client}>
    <Signup />
  </ApolloProvider>
);

export default App;
