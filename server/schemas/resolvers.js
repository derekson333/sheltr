const { AuthenticationError } = require("apollo-server-express");
const { User, Animal, Application } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // For dev only
    users: async () => {
      return await User.find().populate("applications").populate("adoptions");
    },
    user: async (parent, args) => {
      return await User.findById(args.id)
        .populate("applications")
        .populate("adoptions");
    },
    animals: async () => {
      return await Animal.find().populate("applications").populate("adoption");
    },
    animal: async (parent, args) => {
      return await Animal.findById(args.id)
        .populate("applications")
        .populate("adoption");
    },
    application: async (parent, args) => {
      return await Application.findById(args.animalId);
    },
    applications: async (parent, args) => {
      return await Application.find({ adoptee: args.id });
    },
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

      throw new AuthenticationError("Not logged in");
    },

    makeDonation: async (parent, {userId, donationAmount}) => {
        if (context.user) {
            return await User.findOneAndUpdate(
                { _id: userId },
                { $inc: { donations: donationAmount }},
                { runValidators: true, new: true}
            )
        }
        throw new AuthenticationError("Not logged in")
    },

    addAnimal: async (
      parent,
      { name, age, sex, animalType, breed, familyFriendly }
    ) => {
      return await Animal.create({
        name,
        age,
        sex,
        animalType,
        breed,
        familyFriendly,
      });
    },

    removeAnimal: async (parent, { animalId }) => {
      return await Animal.findOneAndDelete({ _id: animalId });
    },

    addApplication: async (parent, { applicant, adoptee }, context) => {
      if (context.user) {
        return await Application.create({ applicant, adoptee });
      }

      throw new AuthenticationError("Not logged in");
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctName = true;
      if (user.username !== username) {
        correctName = false;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }
      if (!correctName) {
        throw new AuthenticationError("Incorrect username");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
