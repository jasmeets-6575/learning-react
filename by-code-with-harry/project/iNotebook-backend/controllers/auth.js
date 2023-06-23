const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const asyncWrapper = require("../asyncWrapper/async");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const BadRequestError = require("../errors/bad-request");
const UnauthenticatedError = require("../errors/unauthenticated");

const getAllUser = asyncWrapper(async (req, res) => {
  const user = await User.find({});
  res.status(200).json({ user });
});

const createUser = asyncWrapper(async (req, res) => {
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
});

const loginUser = asyncWrapper(async (req, res) => {
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
    res.status(StatusCodes.OK).json({ authToken });
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server Error");
  }
});

module.exports = { getAllUser, createUser, loginUser };
