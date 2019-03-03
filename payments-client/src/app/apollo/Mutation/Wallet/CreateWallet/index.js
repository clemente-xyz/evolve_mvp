import gql from "graphql-tag";

export default gql`
  mutation CreateWallet($ownerId: ID!) {
    createWallet(ownerId: $ownerId) {
      _id
      balance
      owner {
        _id
        username
      }
    }
  }
`;
