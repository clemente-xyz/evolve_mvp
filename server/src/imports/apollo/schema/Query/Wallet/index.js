import { gql } from "apollo-server";

export default gql`
  extend type Query {
    getWallets: [Wallet]
    getWallet(ownerId: ID!): Wallet
  }
`;
