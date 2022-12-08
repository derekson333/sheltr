const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        applications: [Application]
        adoptions: [Animal]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
    }
`;

module.exports = typeDefs;