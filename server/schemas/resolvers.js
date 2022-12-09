const { AuthenticationError } = require('apollo-server-express');
const { User, Animal, Application } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },

        animals: async () => {
            return Animal.find();
        },

        animal: async (parent, { animalId }) => {
            return Animal.findById(animalId);
        },

        application: async (parent, { applicationId }) => {
            return Application.findById(applicationId)
        }
    },

    Mutation: {
        addUser: async (parent,  { username, email, password }) => {
            return User.create({ username, email, password });
        },

        removeUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId });
        },

        addAnimal: async (parent, { name, age, sex, animalType, breed, familyFriendly }) => {
            return Animal.create({ name, age, sex, animalType, breed, familyFriendly });
        },

        removeAnimal: async (parent, { animalId }) => {
            return Animal.findOneAndDelete({ _id: animalId });
        },

        addApplication: async (parent, { applicant, adoptee }) => {
            return Application.create({ applicant, adoptee });
        }
    }
};

module.exports = resolvers;