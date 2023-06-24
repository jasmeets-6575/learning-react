const express = require("express");
const { fetchAllNotes, addNote, updateNote, deleteNote } = require("../controllers/notes");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");

router.route("/fetchallnotes").get(fetchuser, fetchAllNotes);
router.route("/addnote").post(fetchuser, addNote);
router.route("/updatenote/:id").patch(fetchuser, updateNote);
router.route("/deletenote/:id").delete(fetchuser, deleteNote);

module.exports = router;
