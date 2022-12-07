const { model, Schema } = require('mongoose');

const applicationSchema = new Schema({});

const Application = model('Application', applicationSchema);

module.exports = Application;