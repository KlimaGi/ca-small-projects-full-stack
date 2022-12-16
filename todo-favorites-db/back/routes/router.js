const express = require('express');
const router = express.Router();

const { addNote, allNotes } = require('../controllers/mainController');

router.post("/addNote", addNote);
router.get("/allNotes", allNotes);


module.exports = router;  