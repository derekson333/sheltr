const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
      },
      password: {
        type: String,
        required: true,
        minlength: 5,
      },
      applications: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Application'
        }
      ],
      adoptions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Animal'
        }
      ]
});

const User = model('User', userSchema);

module.exports = User;