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
        firstName: String!
        lastName: String!
        streetAddress: String!
        city: String!
        state: String!
        zip: String!
        phone: String!
        children: String!
        numberOtherPets: String!
        typeOtherPets: String! 
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(username: String!): User
        users: [User]
        me: User
        animals: [Animal]
        animal(id: ID!): Animal
        application(id: ID!): Application
        applications(animalId: ID!): [Application]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        removeUser(userId: ID!): User
        makeDonation(username: String!, donationAmount: Float!): User
        addAnimal(name: String!, age: Int!, sex: String!, species: String!, breed: String, familyFriendly: Boolean): Animal
        removeAnimal(id: ID!): Animal
        addApplication(applicant: ID!, adoptee: ID!, firstName: String!, lastName: String!, streetAddress: String!, city: String!, state: String!, zip: String!, phone: String!, children: String!, numberOtherPets: String!, typeOtherPets: String): Application
        login(username: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;