const mongoose = require("mongoose");

const Education = mongoose.Schema({
  sectionName: String,
  universityName: String,
  course: String,
  marks: String,
  date: String,
  bachelorUniversityName: String,
  bachelorCourseName: String,
  bachelorMarks: String,
  date1: String,
  imageUrl: String,
});

module.exports = mongoose.model("education", Education);
