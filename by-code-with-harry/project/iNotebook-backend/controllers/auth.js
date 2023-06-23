const User = require("../models/User");
const asyncWrapper = require("../asyncWrapper/async");

const getAllUser = asyncWrapper(async (req, res) => {
  const user = await User.find({});
  res.status(200).json({ user });
});

module.exports = { getAllUser };
