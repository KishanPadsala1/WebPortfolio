const mongoose = require("mongoose");
const DB = process.env.DATABASE;

//--> database connection...
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 2000,
  })
  .then(() => {
    console.log("db connected");

    // Footer.create({
    //   content: "Copyright @ 2023 Kishan Padsala",
    // });

    // About.create({
    //   title: "About",
    //   content:
    //     "I implemented this web project as Dynamic so many thinks can manage at one place. I used populer frameworks like as Node JS & Express. I used MongoDB as database. Using Mongoose library, I integrated connection with MongoDB database for translate between objects in code and the representation of those objects in MongoDB. I used hbs as template engine.",
    // });

    // Experience.create({
    //   title: "Experience",
    //   developer: "FullStack Developer",
    //   date: "Oct 2022 – Jan 2023",
    //   companyName: "Wokontech IT Solutions – Internship",
    //   date1: "On-site",
    //   contentList: [
    //     {
    //       content:
    //         "Used various languages, including HTML, CSS, JavaScript, C#, SQL.",
    //     },
    //     {
    //       content: "I am familiar with frameworks like ASP.NET, Bootstrap 5.",
    //     },
    //     {
    //       content: "I am familiar with database MySQL.",
    //     },
    //     {
    //       content:
    //         "Worked on Payment Portal & Donation Portal using above technologies.",
    //     },
    //   ],
    //   imageUrl: "/static/images/experience-image.jpg",
    // });

    // Education.create({
    //   sectionName: "Education",
    //   universityName: "Gujarat Technological University",
    //   course: "Diploma in Computer Engineering",
    //   marks: "CGPA: 8.95",
    //   date: "Aug 2019 - June 2022",
    //   bachelorUniversityName: "Gujarat Technological University",
    //   bachelorCourseName: "Bachelor of Computer Engineering",
    //   bachelorMarks: "-",
    //   date1: "Aug 2022 - Present",
    //   imageUrl: "/static/images/education-image.jpg",
    // });

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
