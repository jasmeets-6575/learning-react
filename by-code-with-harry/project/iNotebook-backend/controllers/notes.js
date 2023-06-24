const Notes = require("../models/Notes");
const { StatusCodes } = require("http-status-codes");
const asyncWrapper = require("../asyncWrapper/async");

const fetchAllNotes = asyncWrapper(async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

const addNote = asyncWrapper(async (req, res) => {
    console.log(req.user)
  try {
    const { title, description, tag } = req.body;
    const notes = await Notes.create({
      user: req.user.id,
      title,
      description,
      tag,
    });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});
module.exports = { fetchAllNotes, addNote };
