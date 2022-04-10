const mongoose = require('mongoose');
const mongooseValidator = require('mongoose-unique-validator');

const UserModel = mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true
    },

    pseudo: {
        type: String
    }

})


UserModel.plugin(mongooseValidator);

module.exports = mongoose.model('User', UserModel);