import { gql } from "apollo-server";

export default gql`
  type Company {
    _id: ID!
    username: String!
    email: String!
    orgName: String
    avatar: String
    wallet: Wallet!
    createdAt: Date!
    updatedAt: Date!
  }

  type MeAsCompany {
    _id: ID!
    username: String!
    email: String!
    orgName: String
    avatar: String
    wallet: Wallet!
    createdAt: Date!
    updatedAt: Date!
  }
`;
