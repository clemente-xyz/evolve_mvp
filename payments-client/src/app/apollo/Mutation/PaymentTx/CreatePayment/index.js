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
      _id
      sendingCrypto
      receivingCrypto
      amount
      senderUser {
        _id
        username
      }
      receiverUser {
        _id
        username
      }
    }
  }
`;
