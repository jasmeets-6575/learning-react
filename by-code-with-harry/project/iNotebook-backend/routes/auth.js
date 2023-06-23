const express = require("express");
const router = express.Router();
const { getAllUser, createUser, loginUser, getUser } = require("../controllers/auth");

router.route("/").get(getAllUser);
router.route("/createuser").post(createUser);
router.route("/getuser").post(getUser);
router.route("/login").post(loginUser);

module.exports = router;
