const mongoose = require("mongoose");

const Detail = new mongoose.Schema({
  brandName: String,
  brandIconPath: String,
  links: [
    {
      label: String,
      url: String,
    },
  ],
});

module.exports = mongoose.model("detail", Detail);
