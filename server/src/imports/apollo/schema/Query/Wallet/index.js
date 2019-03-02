import { gql } from "apollo-server";

export default gql`
  extend type Query {
    getWallets: [Wallet]
    getWallet(_id: ID!): Wallet
  }
`;
