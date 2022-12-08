const { AuthenticationError } = require('apollo-server-express');
const { User, Animal, Application } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('applications').populate('adoptions')
        }
    },
    Mutation: {},
};

module.exports = resolvers;