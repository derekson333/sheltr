const { model, Schema } = require('mongoose');

const animalSchema = new Schema({});

const Animal = model('Animal', animalSchema);

module.exports = Animal;