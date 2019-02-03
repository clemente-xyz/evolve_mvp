import { ApolloServer, makeExecutableSchema } from "apollo-server";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import { auth } from "../helpers";

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default new ApolloServer({
  schema,
  context: ({ req }) => auth(req)
});
