const Notes = require("../models/Notes");
const { StatusCodes } = require("http-status-codes");
const asyncWrapper = require("../asyncWrapper/async");

const fetchAllNotes = asyncWrapper(async (req,res)=>{
  const notes = await Notes.find({user:req.user.id})
  res.json(notes)
})
module.exports = {fetchAllNotes}