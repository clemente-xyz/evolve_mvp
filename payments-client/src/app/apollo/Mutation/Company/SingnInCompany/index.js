import { gql } from "apollo-boost";

export default gql`
  mutation SingInCompany($username: String!, $password: String!) {
    signInCompany(username: $username, password: $password) {
      token
    }
  }
`;
