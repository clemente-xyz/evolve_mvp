import { gql } from "apollo-server";

export default gql`
  extend type Query {
    getPayments: [PaymentTx]
    getPayment(_id: ID!): PaymentTx
  }
`;
