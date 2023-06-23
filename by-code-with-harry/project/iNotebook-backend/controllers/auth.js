const User = require("../models/User");
const asyncWrapper = require("../asyncWrapper/async");
const bcrypt = require("bcryptjs");

const getAllUser = asyncWrapper(async (req, res) => {
  const user = await User.find({});
  res.status(200).json({ user });
});

const createUser = asyncWrapper(async (req, res) => {
  const salt = bcrypt.genSalt(10);
  const securedPass = await bcrypt.hash(req.body.password, salt);
  const user = await User.create({
    name: req.body.name,
    password: securedPass,
    email: req.body.email,
  });
  res.status(201).json({ user });
});

module.exports = { getAllUser, createUser };
