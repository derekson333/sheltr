const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        donations: Float
        applications: [Application]
        adoptions: [Animal]
    }

    type Animal {
        _id: ID!
        name: String!
        age: Int!
        sex: String!
        animalType: String!
        breed: String
        familyFriendly: Boolean
        imgUrl: String
        applications: [Application]
        adoption: User
    }

    type Application {
        _id: ID!
        applicant: User
        adoptee: Animal
        streetAddress: String!
        city: String!
        state: String!
        zip: Int!
        phone: Int!
        children: Int!
        numberOtherPets: Int!
        typeOtherPets: String 
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(id: ID!): User
        animals: [Animal]
        animal(id: ID!): Animal
        application(id: ID!): Application
        applications(animalId: ID!): [Application]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        removeUser(userId: ID!): User
        makeDonation(userId: ID!, donationAmount: Float!): User
        addAnimal(name: String!, age: Int!, sex: String!, species: String!, breed: String, familyFriendly: Boolean): Animal
        removeAnimal(id: ID!): Animal
        addApplication(applicant: ID!, adoptee: ID!): Application
        login(username: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;