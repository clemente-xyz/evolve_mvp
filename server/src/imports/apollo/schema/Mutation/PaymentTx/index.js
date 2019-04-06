import { gql } from "apollo-server";

export default gql`
  extend type Mutation {
    createPayment(
      sendingCrypto: String!
      receivingCrypto: String!
      amount: Int!
      receiverUser: ID!
    ): PaymentTx
    changePaymentApprovementState(_id: ID!): PaymentTx
  }
`;
