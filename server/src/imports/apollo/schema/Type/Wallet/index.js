import { gql } from "apollo-server";

export default gql`
  type Wallet {
    _id: ID!
    owner: Company!
    balance: Float!
    createdAt: Date!
    updatedAt: Date!
  }
`;
