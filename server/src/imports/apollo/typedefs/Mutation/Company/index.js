import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createCompany(
      username: String!
      password: String!
      orgName: String
    ): Company
  }
`;
