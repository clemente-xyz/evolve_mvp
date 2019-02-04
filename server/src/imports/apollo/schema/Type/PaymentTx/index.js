import { gql } from "apollo-server";

export default gql`
  type PaymentTx {
    _id: ID!
    sendingCripto: String!
    receivingCripto: String!
    amountInUsd: String!
    senderUser: Company!
    receiverUser: Company!
    createdAt: Date
    updatedAt: Date
  }
`;
