const express = require('express');
const router = express.Router();

const { addNote, allNotes, deleteNote } = require('../controllers/mainController');

router.post("/addNote", addNote);
router.get("/allNotes", allNotes);
router.post("/deleteNote", deleteNote);


module.exports = router;  