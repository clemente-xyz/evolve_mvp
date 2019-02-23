import { gql } from "apollo-boost";

export default gql`
  query MeAsCompany {
    meAsCompany {
      _id
      username
      email
      orgName
    }
  }
`;
