import React from 'react';
import css from './Hero.module.scss';
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
        
        <motion.div
        variants = {staggerContainer}
        initial = "hidden"
        whileInView="show"
        viewport = {{ once: false, amount: 0.25 }} 

        className={`paddings ${css.container}`}>

        {/* Upper Elements */}
              <div className={css.upperElements}>
               
              <motion.span
                    variants = {fadeIn("right", "tween", 0.2, 1)}  
                    className='primaryText'>
                    Hey There, <br></br> I'm Satyam.
              </motion.span>

              <motion.span 
              className='secondaryText'
                    variants={fadeIn("left", "tween", 0.4, 1)}>
                    I design beautiful simple <br></br>
                    things, And I love what I do.
              </motion.span>
              </div>

    {/* For Image */}

              <motion.div 
                  variants={fadeIn("", "tween", 0.3, 1)}
                  className={css.person}>
                  
                  <motion.img 
                  variants={fadeIn("up", "tween", 0.3, 1.2)}
                  className= {css.satyam} src='./satyam.png' alt=''/>
              </motion.div>

    {/* {For Email} */}

              <motion.a 
              variants={fadeIn("right", "tween", 0.5, 2)}
              className={`paddings ${css.email}`} href='mailto:satyammauryacollegenew@gmail.com'>
                satyammauryacollegenew@gmail.com
              </motion.a>

              <div className={css.lowerElements}> 
                  <motion.div 
                  variants={fadeIn("right", "tween",  0.3, 1)}
                  className={css.experience}>

                      <div className="primaryText"> 01 </div>
                      <div className="secondaryText"> 
                          <div>Year</div>
                          <div>Experience</div>
                      </div>
                  </motion.div>
                  <motion.div 
                  variants={fadeIn("left", "tween", 0.5, 1)}
                  className={css.certificate}>
                    <img src='./certificate.png' alt=''/>
                    <span> CERTIFIED PROFESSIONAL</span>
                    <span>FRONTEND WEB DEVELOPER </span>
                  </motion.div>
              </div>
        </motion.div>

    </section>
  )
}

export default Hero;
