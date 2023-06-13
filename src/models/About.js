const mongoose = require("mongoose");

const About = mongoose.Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model("about", About);
