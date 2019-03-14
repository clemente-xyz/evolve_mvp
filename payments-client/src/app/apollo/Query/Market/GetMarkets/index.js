import gql from "graphql-tag";

export default gql`
  query GetMarkets {
    getMarkets {
      _id
      code
      name
      primaryCurBuyPrice
      primaryCurSellPrice
    }
  }
`;
