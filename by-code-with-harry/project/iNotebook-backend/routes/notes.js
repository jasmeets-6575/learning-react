const express = require("express");
const { fetchAllNotes, addNote, updateNote } = require("../controllers/notes");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");

router.route("/fetchallnotes").get(fetchuser, fetchAllNotes);
router.route("/addnote").post(fetchuser, addNote);
router.route("/updatenote/:id").patch(fetchuser, updateNote);

module.exports = router;
