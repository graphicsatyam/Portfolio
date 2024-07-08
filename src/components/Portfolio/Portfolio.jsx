import React from "react";
import css from "../Portfolio/Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant2 } from "../../utils/motion";
import { motion } from "framer-motion";
import projectdata from "../../utils/projectdata.json";

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`innerWidth flexcenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText"> My Latest Works </span>
            <p style={{ marginTop: "10px", marginBottom: "10px" }}>
              Perfect solution for Digital Experience
            </p>
          </div>

          <motion.span variants={textVariant2} className="secondaryText">
            Explore more Works
          </motion.span>
        </div>
        {/* {imgaes} */}
        {/* <div className={`flexCenter ${css.showcase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./showCase1.png"
            alt="project"
          /> 
        
          <div className={css.skill}> HTML CSS </div>

          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./showCase2.png"
            alt="project"
          />

          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./showCase3.png"
            alt="project"
          />
        </div> */}
      </div>{" "}
      
    </motion.section>
  );
};

export default Portfolio;
