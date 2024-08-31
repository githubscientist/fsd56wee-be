const express = require('express');
const bookController = require('../controllers/bookController');
const book = require('../models/book');

const bookRouter = express.Router();

bookRouter.post('/', bookController.createBook);
bookRouter.get('/', bookController.getBooks);
bookRouter.get('/:id', bookController.getBook);
bookRouter.put('/:id', bookController.updateBook);
bookRouter.delete('/:id', bookController.deleteBook);

module.exports = bookRouter;