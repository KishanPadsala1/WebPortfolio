const mongoose = require("mongoose");

const Footer = mongoose.Schema({
  content: String,
});

module.exports = mongoose.model("footer", Footer);
