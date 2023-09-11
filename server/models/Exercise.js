const shortid = require('shortid')
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const exerciseSchema = new Schema({
    _id: {
        type: String,
        index: true,
        default: shortid.generate
    },
    title: {
        type: String,
        required: true,
        maxlength: [20, 'title too long']
    },
    description: {
        type: String,
        default: '',
        maxlength: [140, 'description too long']
    },
    duration: {
        type: Number,
        default: 0,
        min: [0, 'duration cannot be negative']
    },
    date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)

    },
    email: String,
    userId: {
        type: String,
        ref: 'User',
        index: true
    }
});

const newExcercise = model('newExcercise', exerciseSchema);

module.exports = newExcercise;