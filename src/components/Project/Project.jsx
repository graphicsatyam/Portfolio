import React from "react";
import projectdata from "../../utils/projectdata.json";
import css from "./Project.module.scss";
import { fadeIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className={`paddings innerWidth ${css.main_box}`}>
      {projectdata.map((e, index) => {
        return (
          <motion.div 
           variants={fadeIn("up", "tween", 0.1, 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
          id="project"
          className={css.outer}>
            <div className={css.project_image}>
              <img src={e.image} />
            </div>
            <div className={css.link}>
              <div className={css.description}> {e.title} </div>
              <motion.div 
              variants={zoomIn(.4+index/10, 1)}
              className={css.link_fill}>
                <a href={e.code} className={css.code}>Code</a> |
                <a href={e.livelink} className={css.livelink}> Live-Link</a>
              </motion.div>
            </div>
            <div className={css.details}> {e.details} </div>
            <div className={css.skills}>
              {" "}
              {e.skills.map((e, index) => {
                return <motion.div 
                variants={zoomIn(.5+index/3, .3)}
                className={css.skill}> {e} </motion.div>;
              })}{" "}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Project;
