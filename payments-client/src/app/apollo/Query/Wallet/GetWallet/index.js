import gql from "graphql-tag";

export default gql`
  query GetWallet($ownerId: ID!) {
    getWallet(ownerId: $ownerId) {
      _id
      balanceInClp
      owner {
        _id
        username
      }
    }
  }
`;
