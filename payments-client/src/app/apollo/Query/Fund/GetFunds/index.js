import gql from "graphql-tag";

export default gql`
  query GetFunds($wallet: ID!) {
    getFunds(wallet: $wallet) {
      _id
      currency
      amount
    }
  }
`;
