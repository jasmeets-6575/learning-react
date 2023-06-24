const express = require("express");
const { fetchAllNotes } = require("../controllers/notes");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");

router.route("/fetchallnotes").get(fetchuser, fetchAllNotes)

module.exports = router;
