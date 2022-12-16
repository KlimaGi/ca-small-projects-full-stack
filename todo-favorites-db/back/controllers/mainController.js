const noteSchema = require('../schemas/postSchema');

module.exports = {
  addNote: async (req, res) => {

    const newNote = new noteSchema(req.body);
    await newNote.save();
    res.send({ note: newNote });
  },


  // 31:47
}