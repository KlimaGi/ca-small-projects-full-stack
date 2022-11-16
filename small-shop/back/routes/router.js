const express = require('express');
const router = express.Router();

const { createProduct, deleteProduct } = require('../controllers/mainController');

router.post('/addProduct', createProduct);
router.get('/deleteProduct/:index', deleteProduct)

module.exports = router; 