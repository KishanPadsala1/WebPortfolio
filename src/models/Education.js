const mongoose = require("mongoose");

const Education = mongoose.Schema({
  sectionName: String,
  universityName: String,
  course: String,
  marks: String,
  date: String,
  imageUrl: String,
});

module.exports = mongoose.model("education", Education);
