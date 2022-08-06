const Book = require('../models/book')

const createBook = async (data) => {
  const obj = new Book({
    title: data.title
  })
  return obj.save()
}

module.exports = {
    createBook
}