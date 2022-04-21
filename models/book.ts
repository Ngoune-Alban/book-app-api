import { Schema, model } from 'mongoose';

const book = new Schema({

    authorId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = model('Book', book);