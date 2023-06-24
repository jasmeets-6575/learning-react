const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const asyncWrapper = require("../asyncWrapper/async");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const BadRequestError = require("../errors/bad-request");
const UnauthenticatedError = require("../errors/unauthenticated");

const getAllUser = asyncWrapper(async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({ user });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

const createUser = asyncWrapper(async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const securedPass = await bcrypt.hash(req.body.password, salt);
    const user = await User.create({
      name: req.body.name,
      password: securedPass,
      email: req.body.email,
    });
    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    res.status(StatusCodes.OK).json({ authToken });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

const loginUser = asyncWrapper(async (req, res) => {
  let success = true;
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new BadRequestError("Please provide email and password");
    }
    let user = await User.findOne({ email });
    if (!user) {
      throw new UnauthenticatedError("Invalid Credentials");
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      throw new UnauthenticatedError("Invalid Credentials");
    }
    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    res.status(StatusCodes.OK).json({ success, authToken });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

const getUser = asyncWrapper(async (req, res) => {
  try {
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});
module.exports = { getAllUser, createUser, loginUser, getUser };
