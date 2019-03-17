import { gql } from "apollo-server";

export default gql`
  extend type Mutation {
    createFund(wallet: ID!, currency: String!, amount: Float!): Fund
  }
`;
