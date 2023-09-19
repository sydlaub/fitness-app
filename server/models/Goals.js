const shortid = require('shortid')
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const goalSchema = new Schema({
    _id: {
        type: String,
        index: true,
        default: shortid.generate
    },
    goalText: {
        type: String,
        required: true,
        maxlength: [50, 'goal too long']
    },
    date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)

    }
});

const Goal = model('Goal', goalSchema);

module.exports = Goal;