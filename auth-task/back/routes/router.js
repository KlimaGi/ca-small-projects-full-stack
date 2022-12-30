const express = require('express');
const router = express.Router();


const {
  emailValid,
  passwordValid,
  userValid,
  secretValid
} = require("../middleware/middle");

const {
  setUser, createPost
} = require('../controllers/mainController');


router.get('/setUser/:username', setUser);
router.post('/create', createPost)


module.exports = router; 