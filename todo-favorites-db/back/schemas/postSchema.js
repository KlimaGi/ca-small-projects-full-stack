const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  time: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
})

const exportNote = mongoose.model('typeNote', noteSchema);

module.exports = exportNote;