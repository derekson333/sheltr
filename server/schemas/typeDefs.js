const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        applications: [Application]
        adoptions: [Animal]
    }

    type Animal {
        name: String!
        age: Int!
        sex: String!
        animalType: String!
        breed: String
        familyFriendly: Boolean
        applications: [Application]
        adoption: User
    }

    type Application {
        applicant: User
        adoptee: Animal
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: User
        animals: [Animal]
        animal: Animal
        application: Application
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        removeUser(userId: ID!): User
        addAnimal(name: String!, age: Int!, sex: String!, species: String!, breed: String, familyFriendly: Boolean): Animal
        removeAnimal(animalId: ID!): Animal
        addApplication(applicant: ID!, adoptee: ID!): Application
    }
`;

module.exports = typeDefs;