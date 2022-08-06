const express = require('express')
const bookValidator = require('../middlewares/book-validator')
const bookController = require('../controllers/book');

const router = express.Router()

router.post('/',bookValidator.validateCreateBook, bookController.createBook)
router.get('/count',bookController.getCount)
router.get('/data',bookController.getAllRecords)

module.exports = router
