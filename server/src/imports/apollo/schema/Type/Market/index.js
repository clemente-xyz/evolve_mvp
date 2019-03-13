import { gql } from "apollo-server";

export default gql`
  type Market {
    _id: ID!
    code: String!
    name: String!
    primaryCurrency: String!
    secondaryCurrency: String!
    primaryCurBuyPrice: Float
    primaryCurSellPrice: Float
  }
`;
