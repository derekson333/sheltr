import { gql } from '@apollo/client';

export const QUERY_ANIMALS = gql`
  # create a GraphQL query to be executed by Apollo Client
  query getAnimals {
    animals {
    }
  }
`;
