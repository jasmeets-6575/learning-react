const express = require("express");
const { fetchAllNotes, addNote } = require("../controllers/notes");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");

router.route("/fetchallnotes").get(fetchuser, fetchAllNotes);
router.route("/addnote").post(fetchuser, addNote);

module.exports = router;
