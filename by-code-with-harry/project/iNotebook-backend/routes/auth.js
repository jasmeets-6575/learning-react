const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { getAllUser } = require("../controllers/auth");

router.get("/", getAllUser);

module.exports = router;
