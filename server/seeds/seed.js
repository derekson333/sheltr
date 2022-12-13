const db = require('../config/connection');
const bcrypt = require('bcrypt');
const { Animal, Application, User } = require('../models');

const animalData = require('./animalData.json');
const userData = require('./userData.json');

db.once('open', async () => {
    await Animal.deleteMany({});
    await Animal.insertMany(animalData);

    for (const user of userData) {
        user.password = await bcrypt.hash(user.password, 10) 
    }

    await User.deleteMany({});
    await User.insertMany(userData);

    console.log('Shelter seeded!');
    process.exit(0)
})