import { ApolloServer, makeExecutableSchema } from "apollo-server";
import typeDefs from "./typedefs";
import resolvers from "./resolvers";

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default new ApolloServer({ schema });
