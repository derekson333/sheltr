const { model, Schema } = require('mongoose');

const applicationSchema = new Schema({
    applicant: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    adoptee: {
        type: Schema.Types.ObjectId,
        ref: 'Animal'
    }
});

const Application = model('Application', applicationSchema);

module.exports = Application;