import { ApolloServer, makeExecutableSchema } from "apollo-server";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import helpers from "../helpers";

const { findAuthUser } = helpers;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default new ApolloServer({
	schema,
	context: async ({ req }) => ({ user: await findAuthUser(req) })
});
