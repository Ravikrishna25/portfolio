import React from "react";
import Project from "../components/project";
import style from "../styles/projects.module.css";
import shogi from "./Images/shogi.png";
import mozhi from "./Images/mozhi.png";


import { motion, Variants } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Mozhi",
    subTitle: "an Ecommerce platform for Handcraftsmen",
    img1: mozhi,
    desc: "Building an Ecommerce platform in 6 months along with a team of 4 members.",
    techUsed: [
      "React Js",
      "Node Js",
      "Express Js",
      "Mongo DB",
      "Stripe",
    ],
    features: [
      "Products Tile",
      "Nearby Sellers' Profile and Location with Product Tile Feed",
      "Categories Tile",
      "Orders Tile",
    ],
    resp: "Throughout my leadership tenure, I directed the backend development, orchestrated the implementation of Redux on the frontend, and oversaw the seamless integration processes.",
    git: "https://github.com/Ravikrishna25/Mozhi-an-Ecommerce-for-Handcraftsmen",
  },
  {
    id: 2,
    title: "Shogi",
    subTitle:
      "a Learning platform which connects chess academy and learners",
    img1: shogi,
    desc: "Welcome to our Chess Academy platform, streamlining connections between academies and learners efficiently. ",
    techUsed: [
      "React",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
    ],
    features: [ "Metrics Visualisation", "Academy Enrollment", "Course Enrollment", "Course Tracking"],
    resp: "Contributed fully and completed the whole project by myself without any 3rd person involvement",
    git: "https://github.com/Ravikrishna25/fullstack",
  },

];

const Projects = () => {
  return (
    <div id="projects" className={`  ${style.projects}`}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={"sectionHeading"}
        data-outline="PROJECTS"
      >
        PROJECTS
      </motion.h2>
      <div className={` ${style.container}`}>
        {/*  */}
        {data.map((ele, ind) => (
          <Project key={ele.id} {...ele} ind={ind} />
        ))}

        {/*  */}
      </div>
    </div>
  );
};

export default Projects;
