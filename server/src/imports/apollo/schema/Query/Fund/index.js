import { gql } from "apollo-server";

export default gql`
  extend type Query {
    getFunds(wallet: ID!): [Fund]
  }
`;
