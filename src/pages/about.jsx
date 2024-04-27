import React from "react";
import style from "../styles/about.module.css";
import { motion, Variants } from "framer-motion";
import ravi from "./Images/RaviImg.jpg";
import Button from "../components/button/button";
import { useBreakpointValue } from "@chakra-ui/react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import pdf from "./Images/Ravikrishna_Resume.pdf"

const About = () => {
  const variant = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  const textAnimate = {
    offscreen: { y: +20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  const containerAnimation = {
    offscreen: { y: 40, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <div id="about" className={`about section ${style.about2}`}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={"sectionHeading"}
        data-outline="About"
      >
        About
      </motion.h2>
      <motion.div
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  variants={containerAnimation}
                >
      <div className={`${style.container}`}>
        <div className={`${style.leftDiv}`}>
          {/* <img src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="" /> */}
          <motion.div
            initial={{ y: 0, x: 0 }}
            whileHover={{ y: 10, x: 10 }}
            className={style.back_div}
          >
            <motion.div
              initial={{ y: -20, x: -20 }}
              whileHover={{ y: -40, x: -40 }}
            >
              <img className="home-img" src={ravi} alt="" />
            </motion.div>
          </motion.div>
        </div>
        <div className={`${style.rightDdiv}`}>
          <div id="user-detail-intro" >
            <p className={`${style.my_desc}`}>
            I'm a passionate Full Stack Web Developer specializing in the MERN stack, HTML, CSS, JavaScript, React, Node.js, Java, Spring Boot, SQL, PostgreSQL, and MongoDB. With a keen eye for detail and a drive for excellence, I craft dynamic and user-centric web applications. My dedication to continuous learning and problem-solving ensures efficient and effective project delivery. Let's collaborate to bring your ideas to life and create impactful digital experiences together.
            </p>
            <div className={style.card_container}>
              <div className={style.card}>
                <motion.div
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  variants={textAnimate}
                >
                  <h1>
                    <span>7+</span>
                  </h1>
                  <h2>Mini Projects</h2>
                </motion.div>
              </div>
              <div className={style.card}>
                <motion.div
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  variants={textAnimate}
                >
                  <h1>
                    <span>6+</span>
                  </h1>
                  <h2>Hackathons</h2>
                </motion.div>
              </div>
              <div className={style.card}>
                <motion.div
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  variants={textAnimate}
                >
                  <h1>
                    <span>5+</span>
                  </h1>
                  <h2>Team Projects</h2>
                </motion.div>
              </div>
              <div className={style.card}>
                <motion.div
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  variants={textAnimate}
                >
                  <h1>
                    <span>3+</span>
                  </h1>
                  <h2>Real Time Projects</h2>
                </motion.div>
              </div>
            </div>
            <div className={style.skill_div}>
              <div>
                {" "}
                <p className="d-flex align-items-center gap-md-2 gap-sm-1">
                  {" "}
                  <span>
                    <IoIosCheckmarkCircleOutline />
                  </span>{" "}
                  Problem Solving
                </p>
              </div>
              <div>
                {" "}
                <p className="d-flex align-items-center gap-md-2 gap-sm-1 ">
                  {" "}
                  <span>
                    <IoIosCheckmarkCircleOutline />
                  </span>{" "}
                  Adaptability
                </p>{" "}
              </div>
              <div>
                {" "}
                <p className="d-flex align-items-center gap-md-2 gap-sm-1 ">
                  {" "}
                  <span>
                    <IoIosCheckmarkCircleOutline />
                  </span>{" "}
                  Time management
                </p>{" "}
              </div>
              <div>
                {" "}
                <p className="d-flex align-items-center gap-md-2 gap-sm-1 ">
                  {" "}
                  <span>
                    <IoIosCheckmarkCircleOutline />
                  </span>{" "}
                  Team Leadership
                </p>{" "}
              </div>
              <div>
                {" "}
                <p className="d-flex align-items-center gap-md-2 gap-sm-1 ">
                  {" "}
                  <span>
                    <IoIosCheckmarkCircleOutline />
                  </span>{" "}
                  Communication
                </p>{" "}
              </div>
              <div>
                {" "}
                <p className="d-flex align-items-center gap-md-2 gap-sm-1 ">
                  {" "}
                  <span>
                    <IoIosCheckmarkCircleOutline />
                  </span>{" "}
                  Team worker
                </p>{" "}
              </div>
            </div>

            <div className={style.button_div}>
              <a
                className="resume"
                aria-current="page"
                id="resume-link-2"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1FE1ijhxVhkKGXJ6efWQaUMYwK_YZANna/view?usp=sharing"
                  )
                }
                download="Ravi Resume"
                href={pdf}
              >
                <Button text="Resume" id="resume-button-2" />
              </a>
            </div>
          </div>
        </div>
        </div>
        </motion.div>
    </div>
  );
};

export default About;
