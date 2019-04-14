import { gql } from "apollo-server";

export default gql`
  extend type Query {
    getUserPayments(senderUser: ID!): [PaymentTx]
    getAllPayments: [PaymentTx]
  }
`;
