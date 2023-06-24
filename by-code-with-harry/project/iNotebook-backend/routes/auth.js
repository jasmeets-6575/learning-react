const express = require("express");
const router = express.Router();
const {
  getAllUser,
  createUser,
  loginUser,
  getUser,
} = require("../controllers/auth");
const fetchuser = require("../middleware/fetchUser");

router.route("/").get(getAllUser);
router.route("/createuser").post(createUser);
router.route("/getuser").post(fetchuser, getUser);
router.route("/login").post(loginUser);
 
module.exports = router;
