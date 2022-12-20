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
    const arr = req.body;

    await noteSchema.deleteMany({ _id: { $in: arr } })

    res.send({ res: 'deleted' });
  },
  // 31:47
  // 41:01
}