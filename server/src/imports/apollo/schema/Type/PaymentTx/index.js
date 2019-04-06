import { gql } from "apollo-server";

export default gql`
  type PaymentTx {
    _id: ID!
    sendingCrypto: String!
    receivingCrypto: String!
    amount: String!
    senderUser: Company!
    receiverUser: Company!
    createdAt: Date
    updatedAt: Date
  }
`;
