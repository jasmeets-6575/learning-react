const Notes = require("../models/Notes");
const { StatusCodes } = require("http-status-codes");
const asyncWrapper = require("../asyncWrapper/async");

const fetchAllNotes = asyncWrapper(async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

const addNote = asyncWrapper(async (req, res) => {
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
    res.status(500).send("Internal Server Error");
  }
});

const updateNote = asyncWrapper(async (req, res) => {
  const { title, description, tag } = req.body;
  try {
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
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

const deleteNote = asyncWrapper(async (req, res) => {
  try {
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(StatusCodes.NOT_FOUND).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(StatusCodes.UNAUTHORIZED).send("Not Allowed");
    }
    note = await Notes.findByIdAndDelete(req.params.id);
    res
      .status(StatusCodes.OK)
      .json({ success: "Note has been deleted", note: note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = { fetchAllNotes, addNote, updateNote, deleteNote };
