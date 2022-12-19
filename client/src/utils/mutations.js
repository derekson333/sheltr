import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const MAKE_DONATION = gql`
  mutation makeDonation($username: String!, $donationAmount: Float!) {
    makeDonation(username: $username, donationAmount: $donationAmount) {
      username
      donations
    }
  }
`;

export const ADD_APPLICATION = gql`
  mutation addApplication($applicant: ID!, $adoptee: ID!, $streetAddress: String!, $city: String!, $state: String!, $zip: String!, $phone: String!, $children: Int!, $numberOtherPets: Int!, $typeOtherPets: String) {
    addApplication(applicant: $applicant, adoptee: $adoptee, streetAddress: $streetAddress, city: $city, state: $state, zip: $zip, phone: $phone, children: $children, numberOtherPets: $numberOtherPets, typeOtherPets: $typeOtherPets) {
      applicant {
        _id
      }
      adoptee {
        _id
      }
      streetAddress
      city
      state
      zip
      phone
      children
      numberOtherPets
      typeOtherPets
    }
  }
`;
