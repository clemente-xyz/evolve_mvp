import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createCompany(
      username: String!
      password: String!
      email: String!
      orgName: String
    ): Company
    signinCompany(username: String!, password: String!): Company
  }
`;
