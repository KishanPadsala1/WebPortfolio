const mongoose = require("mongoose");

const Intro = mongoose.Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model("introduction", Intro);
