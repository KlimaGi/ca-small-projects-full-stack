const noteSchema = require('../schemas/noteSchema');

module.exports = {
  allNotes: async (req, res) => {
    const notes = await noteSchema.find();
    res.send({ notes });
  },
  addNote: async (req, res) => {

    const newNote = new noteSchema(req.body);
    await newNote.save();
    res.send({ note: newNote });
  },

  deleteNote: async (req, res) => {


    res.send({ res: req.body });
  },
  // 31:47
  // 41:01
}