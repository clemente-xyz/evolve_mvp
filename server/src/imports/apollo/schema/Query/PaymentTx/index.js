import { gql } from "apollo-server";

export default gql`
  extend type Query {
    getAllPayments: [PaymentTx]
    getMyPayments: [PaymentTx]
    getUserPayments(senderUser: ID!): [PaymentTx]
  }
`;
