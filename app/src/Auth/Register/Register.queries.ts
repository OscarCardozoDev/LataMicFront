import { gql } from '@apollo/client';

export const REGISTER_MUTATION = gql`
  mutation Register(
    $name: String!
    $lastname: String!
    $nickname: String!
    $email: String!
    $password: String!
    $country_id: Int!
    $birthday: DateTime!
  ) {
    register(
      data: {
        name: $name
        lastname: $lastname
        nickname: $nickname
        email: $email
        password: $password
        country_id: $country_id
        birthday: $birthday
      }
    ) {
      token
    }
  }
`;
