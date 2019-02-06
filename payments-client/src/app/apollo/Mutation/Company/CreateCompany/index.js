import gql from "graphql-tag";

export default gql`
  mutation CreateCompany(
    $username: String!
    $password: String!
    $email: String!
  ) {
    createCompany(username: $username, password: $password, email: $email) {
      token
    }
  }
`;
