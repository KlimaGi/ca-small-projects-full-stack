const express = require('express');
const router = express.Router();

const { createMessage, deleteMessage } = require('../controllers/mainController');

router.post('/createMessage', createMessage);
router.post('/deleteMessage', deleteMessage);

module.exports = router; 