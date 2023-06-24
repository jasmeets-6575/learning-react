const Notes = require("../models/Notes");
const { StatusCodes } = require("http-status-codes");
const asyncWrapper = require("../asyncWrapper/async");
const BadRequestError = require("../errors/bad-request");

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
  console.log(req.user);
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

const updateNote = asyncWrapper(async (req, res) => {
  const { title, description, tag } = req.body;
  const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }
  let note = await Notes.findById(req.params.id);
  if (!note) {
    return res.status(StatusCodes.NOT_FOUND).send("Not Found");
  }
  if (note.user.toString() !== req.user.id) {
    return res.status(StatusCodes.UNAUTHORIZED).send("Not Allowed");
  }
  note = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.status(StatusCodes.OK).json({ note });
});
module.exports = { fetchAllNotes, addNote, updateNote };
