const mongoose = require("mongoose");

const Service = mongoose.Schema({
  icon: String,
  title: String,
  description: [
    {
      languageName: String,
    },
  ],
});

module.exports = mongoose.model("services", Service);
