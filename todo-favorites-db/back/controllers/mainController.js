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
  updateNote: async (req, res) => {

    const { id, time, text } = req.body;

    const updatedNote = await noteSchema.findOneAndUpdate(
      { _id: id },
      { $set: { time, text } },
      { new: true }
    )

    res.send({ success: true, note: updatedNote });
  }
  // 31:47
  // 41:01
}