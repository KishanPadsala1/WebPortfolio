const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const Detail = require("./models/Detail");
const Slider = require("./models/Sliders");
const Service = require("./models/Service");
const Intro = require("./models/Intro");
const Education = require("./models/Education");

const app = express();

const routes = require("./routes/main");

app.use("/static", express.static("public"));
app.use("", routes);

//--> templete engine...
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

//--> database connection...
mongoose
  .connect("mongodb://127.0.0.1:27017/website", {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("db connected");

    // Education.create(
    //   {
    //     sectionName: "Education",
    //     universityName: "Gujarat Technological University",
    //     course: "Diploma in Computer Engineering",
    //     marks: "CGPA: 8.95",
    //     date: "Aug 2019 - June 2022",
    //     imageUrl: "/static/images/education-image.jpg",
    //   },
    //   {
    //     universityName: "Gujarat Technological University",
    //     course: "Bachelor of Computer Engineering",
    //     marks: "-",
    //     date: "Aug 2022 - Present",
    //   }
    // );

    // Intro.create({
    //   title: "Introduction",
    //   content:
    //     "I completed a comprehensive 2-month training program focused on Node.js, Express, and MongoDB, gaining expertise in full-stack web development. Through hands-on projects and practical exercises, I developed a strong foundation in building scalable and secure web applications using JavaScript technologies.",
    // });

    // Service.create([
    //   {
    //     icon: "fa-solid fa-code",
    //     title: "Languages",
    //     description: [
    //       {
    //         languageName: "JavaScript",
    //       },
    //       {
    //         languageName: "SQL",
    //       },
    //       {
    //         languageName: "HTML",
    //       },
    //       {
    //         languageName: "CSS",
    //       },
    //     ],
    //   },
    // ]);

    // Slider.create([
    //   {
    //     title: "JavaScript",
    //     subTitle: "JavaScript is my favourite langauge",
    //     imageUrl: "/static/images/s1.jpg",
    //   },
    //   {
    //     title: "Node JS",
    //     subTitle: "Node JS is my favourite back-end framework",
    //     imageUrl: "/static/images/s2.jpg",
    //   },
    //   {
    //     title: "MongoDB",
    //     subTitle: "MongoDB is my favourite database",
    //     imageUrl: "/static/images/s3.jpg",
    //   },
    // ]);

    // Detail.create({
    //   brandName: "Kishan Padsala",
    //   brandIconPath: "/static/images/logo.jpeg",
    //   links: [
    //     {
    //       label: "Home",
    //       url: "/",
    //     },
    //     {
    //       label: "Services",
    //       url: "/services",
    //     },
    //     {
    //       label: "Gallery",
    //       url: "/gallery",
    //     },
    //     {
    //       label: "About",
    //       url: "/about",
    //     },
    //     {
    //       label: "Contact Us",
    //       url: "/contact-us",
    //     },
    //   ],
    // });
  })
  .catch((e) => console.log(e));

app.listen(process.env.PORT | 3000, () => {
  console.log("server started...");
});
