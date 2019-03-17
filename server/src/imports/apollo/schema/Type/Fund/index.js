import { gql } from "apollo-server";

export default gql`
  type Fund {
    _id: ID!
    wallet: Wallet!
    currency: String!
    amount: Float!
    createdAt: Date!
    updatedAt: Date!
  }
`;
