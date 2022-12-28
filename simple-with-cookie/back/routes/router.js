const express = require('express');
const router = express.Router();

const {
  emailValid,
  passwordValid,
  userValid,
  secretValid
} = require("../middleware/middle");

const {
  setColor, getColor
} = require('../controllers/mainController');


router.get('/setColor/:color', setColor);
router.get('/getColor', getColor);

module.exports = router; 