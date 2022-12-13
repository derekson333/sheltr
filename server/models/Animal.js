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
    animalType: {
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
    imgUrl: {
        type: String,
        required: false
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