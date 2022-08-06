const Book = require('../models/book')

const findById = async (id) => Book.findById(id)

const findByTitle = async (title) => Book.find({title: title})

const count = async () =>  Book.count()

const findAll = async () => Book.find()

module.exports = {
    findById,
    findByTitle,
    count,
    findAll
}
