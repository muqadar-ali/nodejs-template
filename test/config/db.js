const mongoose = require('mongoose')
const { Book }= require('../../dal/models')
/**
 * Cleans up all database models docs.
 * @return {Promise}
 */
 const cleanUpDatabase = async () => Promise.all(Object.values(mongoose.connection.collections).map(collection => collection.deleteMany()))

/**
 * Create new nutrient
 * @param {Object} data 
 * @returns {Book}
 */
 const createBook = async (data) => {
  const obj = new Book({
    title: data.title
  })
  return obj.save()
  }


  const createBookSampleDb = async ()=> {
    await Promise.all([
      createBook({"title": "The Subtle Art of Not Giving a Fuck"}),
      createBook({"title": "In Search of Lost Time"}),
      createBook({"title": "Lolita"}),
      createBook({"title": "A Tale of Two Cities"}),
      createBook({"title": "The Little Prince"}),
      createBook({"title": "Harry Potter and the Sorcerer's Stone"}),
      createBook({"title": "The Lord of the Rings"})

  ])

  }
  
 module.exports = {
    cleanUpDatabase,
    createBook,
    createBookSampleDb
 }