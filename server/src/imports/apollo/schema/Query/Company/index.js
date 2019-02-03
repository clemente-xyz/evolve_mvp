import { gql } from "apollo-server";

export default gql`
  type Query {
    getCompanies: [Company]
    meAsCompany: MeAsCompany
  }
`;
