// import React from "react";
import css from "../People/People.module.scss";
import { motion } from "framer-motion";
import { staggerChildren, textVariant2 } from "../../utils/motion";


const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="views"
      className={`paddings ${css.wrapper}`}
    >
      <div className={`paddings innerWidth ${css.container}`}>
        <motion.div 
        variants={textVariant2}
        className={`flexCenter  ${css.heading}`}>
          <span className="primaryText"> People Talk About Us </span>
          <p style={{ marginTop: "1rem" }}>
            
           Some of Our Colleague Friends
          </p>
          {/* <p> The Process of submitting an Application was quite cosy </p> */}
        </motion.div>

      </div>
    </motion.section>
  );
};




export default People;
