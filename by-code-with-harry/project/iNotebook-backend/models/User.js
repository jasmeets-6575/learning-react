const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
  },
  email: {
    type: String,
    required: [true, 'must provide email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'must provide password'],
    minlength : [6,"Password must atleast 6 characters"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", UserSchema);
