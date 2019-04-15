import gql from "graphql-tag";

export default gql`
  mutation PaymentTx(
    $sendingCrypto: String!
    $receivingCrypto: String!
    $amount: Int!
    $receiverUser: ID!
  ) {
    createPayment(
      sendingCrypto: $sendingCrypto
      receivingCrypto: $receivingCrypto
      amount: $amount
      receiverUser: $receiverUser
    ) {
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
