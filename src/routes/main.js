const express = require("express");
const routes = express.Router();

const Detail = require("../models/Detail");
const Slider = require("../models/Sliders");
const Service = require("../models/Service");
const Intro = require("../models/Intro");
const Education = require("../models/Education");
const Experience = require("../models/Experience");
const About = require("../models/About");
const Footer = require("../models/Footer");

routes.get("/", async (req, res) => {
  const details = await Detail.findOne();
  const slides = await Slider.find();
  const services = await Service.find();
  const introductions = await Intro.find();
  const educations = await Education.find();
  const experiences = await Experience.find();
  const abouts = await About.find();
  const footers = await Footer.find();

  res.render("index", {
    details: details,
    slides: slides,
    services: services,
    introductions: introductions,
    educations: educations,
    experiences: experiences,
    abouts: abouts,
    footers: footers,
  });
});

module.exports = routes;
