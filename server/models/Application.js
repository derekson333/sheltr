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
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
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
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    children: {
        type: String,
        required: true
    },
    numberOtherPets: {
        type: String,
        required: true
    },
    typeOtherPets: {
        type: String,
        required: false
    }
});

const Application = model('Application', applicationSchema);

module.exports = Application;