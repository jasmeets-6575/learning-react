const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
  },
  title: {
    type: String,
    required: [true, 'must provide title']
  },
  description: {
    type: String,
    required: [true, 'must provide description'],
    unique:true
  },
  tag: {
    type: String,
    default:"General"
  },
  date:{
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model("notes",NotesSchema)