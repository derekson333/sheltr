import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      applications {
        _id
      }
      pets {
        _id
      }
    }
  }
`;

export const QUERY_ANIMALS = gql`
  # create a GraphQL query to be executed by Apollo Client
  query Animals {
    animals {
      name
      sex
      familyFriendly
      breed
      animalType
      age
      _id
    }
  }
`;
