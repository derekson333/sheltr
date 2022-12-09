const db = require('../config/connection');
const { Animal, Application, User } = require('../models');

const animalData = require('./animalData.json');
const userData = require('./userData.json');

db.once('open', async () => {
    await Animal.deleteMany({});
    await Animal.insertMany(animalData);

    await User.deleteMany({});
    await User.insertMany(userData);

    console.log('Shelter seeded!');
    process.exit(0)
})