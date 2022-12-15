const { model, Schema } = require('mongoose');

const applicationSchema = new Schema({
    applicant: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    adoptee: {
        type: Schema.Types.ObjectId,
        ref: 'Animal'
    },
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    children: {
        type: Number,
        required: true
    },
    numberOtherPets: {
        type: Number,
        required: true
    },
    typeOtherPets: {
        type: String,
        required: false
    }
});

const Application = model('Application', applicationSchema);

module.exports = Application;