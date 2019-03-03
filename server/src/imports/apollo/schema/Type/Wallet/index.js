import { gql } from "apollo-server";

export default gql`
  type Wallet {
    _id: ID!
    owner: ID!
    balance: Float!
    createdAt: Date!
    updatedAt: Date!
  }
`;
