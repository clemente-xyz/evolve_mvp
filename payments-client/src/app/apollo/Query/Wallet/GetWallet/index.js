import gql from "graphql-tag";

export default gql`
  query GetWallet($ownerId: ID!) {
    getWallet(ownerId: $ownerId) {
      _id
      balance
      owner {
        _id
        username
      }
    }
  }
`;
