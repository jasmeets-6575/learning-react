const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const asyncWrapper = require("../asyncWrapper/async");
const { BadRequestError } = require('../errors')
const bcrypt = require("bcryptjs");

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
  res.status(StatusCodes.OK).json({ user });
});

module.exports = { getAllUser, createUser };
