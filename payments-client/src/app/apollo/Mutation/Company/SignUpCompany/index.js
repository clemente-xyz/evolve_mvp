import gql from "graphql-tag";

export default gql`
  mutation SignUpCompany(
    $username: String!
    $password: String!
    $email: String!
  ) {
    signUpCompany(username: $username, password: $password, email: $email) {
      token
    }
  }
`;
