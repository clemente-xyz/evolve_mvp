import gql from "graphql-tag";

export default gql`
  mutation CreateCompany($username: String!, $password: String!) {
    createCompany(username: $username, password: $password) {
      username
      password
    }
  }
`;
