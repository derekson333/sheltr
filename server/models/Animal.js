const { model, Schema } = require('mongoose');

const animalSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: false
    },
    familyFriendly: {
        type: Boolean,
        required: true,
        default: true
    },
    applications: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Application'
        }
    ],
    adoption: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Animal = model('Animal', animalSchema);

module.exports = Animal;