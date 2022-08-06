const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    title: {
        type: String,
        sparse: true,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const Book = mongoose.model('Book', schema)

module.exports = Book