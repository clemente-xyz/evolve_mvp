import { gql } from "apollo-server";

export default gql`
  type Company {
    _id: ID!
    username: String!
    password: String!
    orgName: String
  }
`;
