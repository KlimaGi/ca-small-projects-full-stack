const express = require('express');
const router = express.Router();

const { addNote, allNotes, deleteNote, updateNote } = require('../controllers/mainController');

router.post("/addNote", addNote);
router.get("/allNotes", allNotes);
router.post("/deleteNote", deleteNote);
router.post("/update", updateNote);


module.exports = router;  