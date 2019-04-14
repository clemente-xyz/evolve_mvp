import { gql } from "apollo-server";

export default gql`
  type Mutation {
    signInCompany(username: String!, password: String!): Auth
    signUpCompany(
      username: String!
      password: String!
      email: String!
      orgName: String
    ): Auth
  }
`;
