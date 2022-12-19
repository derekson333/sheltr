const { AuthenticationError } = require("apollo-server-express");
const { User, Animal, Application } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // For dev only
    users: async () => {
      return await User.find().populate("applications").populate("adoptions");
    },
    user: async (parent, { username }) => {
      return await User.findOne({ username })
        .populate("applications")
        .populate("adoptions");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("applications").populate("adoptions");
      }
      throw new AuthenticationError('You need to be logged in!');
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

    makeDonation: async (parent, { username, donationAmount }) => {
      // if (context.user) {
      return await User.findOneAndUpdate(
        { username: username },
        { $inc: { donations: donationAmount } },
        { runValidators: true, new: true }
      )
      // }
      // throw new AuthenticationError("Not logged in")
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

    addApplication: async (parent, { applicant, adoptee, firstName, lastName, streetAddress, city, state, zip, phone, children, numberOtherPets, typeOtherPets }, context) => {
      const newApplication = await Application.create({ applicant, adoptee, firstName, lastName, streetAddress, city, state, zip, phone, children, numberOtherPets, typeOtherPets });
      await User.findOneAndUpdate(
        { _id: newApplication.applicant },
        { $addToSet: { applications: newApplication._id }},
        { runValidators: true, new: true }
      );
      await Animal.findOneAndUpdate(
        { _id: newApplication.adoptee },
        { $addToSet: { applications: newApplication._id }},
        { runValidators: true, new: true }
      );
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
