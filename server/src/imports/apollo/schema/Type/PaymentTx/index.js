import { gql } from "apollo-server";

export default gql`
  type PaymentTx {
    _id: ID!
    sendingCripto: String!
    receivingCripto: String!
    amountInUsd: String!
    senderUser: String!
    receiverUser: String!
    createdAt: Date
    updatedAt: Date
  }
`;
