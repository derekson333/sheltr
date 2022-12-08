const { User, Animal, Application } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('applications').populate('adoptions')
        }
    },
    Mutation: {},
};

module.exports = resolvers;