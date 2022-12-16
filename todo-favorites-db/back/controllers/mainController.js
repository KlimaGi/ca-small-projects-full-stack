const noteSchema = require('../schemas/postSchema');

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


  // 31:47
  // 41:01
}