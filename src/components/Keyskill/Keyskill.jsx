import React from "react";
import css from "../Keyskill/Keyskill.module.scss";
import skills from "../../utils/skills.json";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "../../utils/motion";

const Keyskill = () => {
  const { frontend, backend, others } = skills;

  //   console.log(frontend, backend, others);
  //   return (
  //     <div className={css.wrapper}>
  //       <div className={css.container}    >
  //         <div className={css.skills}>
  //           <div className={css.heading}> Frontend</div>
  //           {frontend.map((e, index) => {
  //             return (
  //               <div className={css.smallBox}>
  //                 <span className={css.image}>
  //                   <img src={e.path} alt="" height={50} />{" "}
  //                 </span>
  //                 <span className={css.text}> {e.title}</span>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </div>
  //   );
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="skills"
      className={css.wrapper}
    >
      <div className={css.container}>
        <motion.div 
        variants={fadeIn("up", "tween", 0.1, 0.6)}
        className={css.box}>
          Frontend
          <div className={css.frontend}>
            {frontend.map((e, index) => {
              return (
                <motion.div 
                variants={zoomIn(.1+index/10, .8)}
                className={css.smallBox}>
                  <span className={css.image}>
                    <img src={e.path} alt="" height={30} />{" "}
                  </span>
                  <span className={css.text}> {e.title}</span>
                </motion.div>
              );q
            })}
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn("up", "tween", 0.4, 0.6)}
        className={css.box}>
          Backend
          <div className={css.frontend}>
            {backend.map((e, index) => {
              return (
                <motion.div 
                variants={zoomIn(.7+index/10, .8)}
                className={css.smallBox}>
                  <span className={css.image}>
                    <img src={e.path} alt="" height={30} />{" "}
                  </span>
                  <span className={css.text}> {e.title}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        <motion.div 
       variants={fadeIn("up", "tween", 0.8, 0.6)}
        className={css.box}>
          Others
          <div className={css.frontend}>
            {others.map((e, index) => {
              return (
                <motion.div 
                variants={zoomIn(.9+index/10, .9)}
                className={css.smallBox}>
                  <span className={css.image}>
                    <img src={e.path} alt="" height={30} />{" "}
                  </span>
                  <span className={css.text}> {e.title}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Keyskill;
