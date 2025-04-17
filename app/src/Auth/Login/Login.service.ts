import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
    query GetUserById($user_id: Int!) {
        getUserById(user_id: $user_id) {
            name
            lastname
            nickname
            email
            country {
                name
            }
        }
    }
`;
