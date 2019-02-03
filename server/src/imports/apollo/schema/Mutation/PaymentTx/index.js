import { gql } from "apollo-server";

export default gql`
  extend type Mutation {
    createPayment(
      sendingCripto: String!
      receivingCripto: String!
      amountInUsd: Int!
      senderUser: String!
      receiverUser: String!
    ): PaymentTx
    changePaymentApprovementState(_id: ID!): PaymentTx
  }
`;
