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
  query getAnimals {
    animals {
      
    }
  }
`;

export const QUERY_SINGLE_ANIMAL = gql`
  query getSingleAnimal($animalId: ID!) {
    animal(animalId: $animalId) {
      
    }
  }
`;
