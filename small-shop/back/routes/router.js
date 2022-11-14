const express = require('express');
const router = express.Router();

const controller = require('../controllers/mainController');

router.post('/addProduct', controller.createProduct);
router.get('/deleteProduct/:index/:product', controller.deleteProduct)



module.exports = router; 