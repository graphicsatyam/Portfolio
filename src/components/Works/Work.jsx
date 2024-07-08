import React from "react";
import css from "../Works/Work.module.scss";
import { workExp } from "../../utils/data";
import { motion } from "framer-motion";
import { staggerChildren, zoomIn } from "../../utils/motion";
import { fadeIn, staggerContainer, textVariant2 } from "../../utils/motion";

const Work = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="experience"
      className={`paddings ${css.wrapper}`}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <span className="primaryText yPaddings">My Work Experience</span>

        <div className={`paddings ${css.experiences}`}>
          {workExp.map((exp
          
          , i) => {
            return (
              <motion.div
                className={`flexCenter ${css.exp}`}
                variants={textVariant2}
                key={i}
              >
                <div className={css.post}>
                  <h1> {exp.place} </h1>
                  <p> {exp.tenure} </p>
                </div>

                <div className={css.value}>
                  <h1> {exp.role} </h1>
                  <p> {exp.detail} </p>
                </div>
              </motion.div>
            );
          })}
          


          <motion.div variants={zoomIn(1, 1)} className= {css.progressbar}> 
          <div className={css.line}> </div>
          <div><div className={css.circle} style={{background:"#286F6C"}}> </div></div>
          <div><div className={css.circle} style={{background:"#F2704E"}}> </div></div>
          {/* <div><div className={css.circle} style={{background:"#EEC048"}}> </div></div> */}

          </motion.div>
         
            
          
         </div>
      </div>
    </motion.section>
  );
};

export default Work;
