const express = require('express');
const router = express.Router();

const controller = require('../controllers/mainController');

router.post('/addProduct', controller.createProduct);



module.exports = router; 