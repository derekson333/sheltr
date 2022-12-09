const { AuthenticationError } = require('apollo-server-express');
const { User, Animal, Application } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, { userId }) => {
            return await User.findById(userId);
        },

        animals: async () => {
            return await Animal.find();
        },

        animal: async (parent, args) => {
            return await Animal.findById(args.id);
        },

        application: async (parent, { applicationId }) => {
            return await Application.findById(applicationId)
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },

        removeUser: async (parent, { userId }, context) => {
            if (context.user) {
                return await User.findOneAndDelete({ _id: userId });
            }

            throw new AuthenticationError('Not logged in');
        },

        addAnimal: async (parent, { name, age, sex, animalType, breed, familyFriendly }) => {
            return await Animal.create({ name, age, sex, animalType, breed, familyFriendly });
        },

        removeAnimal: async (parent, { animalId }) => {
            return await Animal.findOneAndDelete({ _id: animalId });
        },

        addApplication: async (parent, { applicant, adoptee }, context) => {
            if (context.user) {
                return await Application.create({ applicant, adoptee });
            }

            throw new AuthenticationError('Not logged in');
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers;