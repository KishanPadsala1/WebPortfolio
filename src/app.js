require("dotenv").config();
require("../db/connection");

const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const Detail = require("./models/Detail");
const Slider = require("./models/Sliders");
const Service = require("./models/Service");
const Intro = require("./models/Intro");
const Education = require("./models/Education");
const Experience = require("./models/Experience");
const About = require("./models/About");
const Footer = require("./models/Footer");

const app = express();

const routes = require("./routes/main");

app.use("/static", express.static("public"));
app.use("", routes);

//--> templete engine...
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

app.listen(process.env.PORT | 3000, () => {
  console.log("server started...");
});
