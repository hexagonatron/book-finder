const express = require('express');

const {getAllHandler, searchBookHandler, saveBookHandler, deleteBookHandler, deleteAllHandler} = require('../controllers/bookControllers');

const router = express.Router();

router.get('/api/books/all', getAllHandler);

router.get('/api/book/:query', searchBookHandler);

router.post('/api/book/add', saveBookHandler);

router.delete('/api/book/all', deleteAllHandler);

router.delete('/api/book/:id', deleteBookHandler);

module.exports = router;