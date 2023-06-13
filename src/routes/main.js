const express = require("express");
const routes = express.Router();

const Detail = require("../models/Detail");
const Slider = require("../models/Sliders");
const Service = require("../models/Service");
const Intro = require("../models/Intro");

routes.get("/", async (req, res) => {
  const details = await Detail.findOne({
    _id: "648080f3f5851916b741a0ae",
  });
  const slides = await Slider.find();
  const services = await Service.find();
  const introductions = await Intro.find();

  res.render("index", {
    details: details,
    slides: slides,
    services: services,
    introductions: introductions,
  });
});

module.exports = routes;
