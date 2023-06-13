const mongoose = require("mongoose");

const Experience = mongoose.Schema({
  title: String,
  developer: String,
  date: String,
  companyName: String,
  date1: String,
  contentList: [
    {
      content: String,
    },
  ],
  imageUrl: String,
});

module.exports = mongoose.model("experiences", Experience);
