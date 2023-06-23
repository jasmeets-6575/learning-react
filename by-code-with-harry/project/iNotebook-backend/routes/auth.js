const express = require("express");
const router = express.Router();
const { getAllUser, createUser, loginUser } = require("../controllers/auth");

router.route("/").get(getAllUser);
router.route("/createuser").post(createUser);
router.route("/login").post(loginUser);

module.exports = router;
