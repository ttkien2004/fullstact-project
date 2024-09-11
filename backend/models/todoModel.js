const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    status: {
        type: String,
    }
}, {timeStamps: true})

module.exports = mongoose.model('todo-lists', todoSchema)
// module.exports = mongoose.model()