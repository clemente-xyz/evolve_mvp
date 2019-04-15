import gql from "graphql-tag";

export default gql`
  query GetMyPayments {
    getMyPayments {
      amount
      createdAt
      _id
      receivingCrypto
      senderUser {
        _id
        username
      }
      receiverUser {
        _id
        username
      }
      sendingCrypto
    }
  }
`;
