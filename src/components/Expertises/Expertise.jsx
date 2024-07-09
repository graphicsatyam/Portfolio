import React from "react";
import css from "../Expertises/Expertise.module.scss";
import { WhatDoIHelp, projectExperience } from "../../utils/data";
import {motion} from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
const Expertise = () => {
  return (
    <motion.section 
    initial = "hidden"
    whileInView= "show"
    variants={staggerContainer}
    viewport={{once:false, amount : 0.25}}    
    
    className={css.wrapper}>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        {/* Left Side */}
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <motion.div
              variants={fadeIn("right", "tween", (i+1)*0.2, 1)}
              className={css.exp} key={i}>
                <div className="flexCenter" style={{ background: exp.bg }}>
                  <exp.icon size={25} color="white" />
                </div>

                <div>
                  <span className="flexCenter">{exp.name}</span>
                  <span className="secondaryText">{exp.projects}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Side */}
        <motion.div 
        variants={textVariant(1)}
        className={css.rightSide}>
          <span className="primaryText"> About Me</span>
          {WhatDoIHelp.map((paragraph, i) => {
            return (
              <div className="secondaryText" key={i}>
             {paragraph}  <br></br>
              </div>
            );
          })}

          <div className={`flexCenter ${css.stats}`}>
            <div className={css.ten}>
              <span className={"primaryText"}>12+</span>
              <span className="secondaryText">Projects Completed</span>
            </div>
            <div className={css.ten}>
              <span className="primaryText">10+</span>
              <span className="secondaryText">Happy Clients</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Expertise;
