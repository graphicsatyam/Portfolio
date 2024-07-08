import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import css from "../Slider/Slider.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { comments, sliderSettings } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "../../utils/motion";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: true,
      }}
      className={`innerWidth ${css.sliderCmp}`}
      modules={[Pagination]}
    >
      {comments.map((e, index) => {
        return (
          <SwiperSlide className={css.slider} key={index}>
            <motion.div 
            variants= {zoomIn(0.2, 0.25)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            className={css.sliderImg}>
              <img src={e.img} />
            </motion.div>

            <div className={css.paragraph}>{e.comment}</div>
            <div className={css.line}> </div>
            <div className={css.bio}>
              <motion.span
                variants={fadeIn("", "tween", 0.3, 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="secondaryText"
              >
                {e.name}
              </motion.span>
              <motion.span
              variants= {zoomIn(0.2, 0.25)}
              > 
              {e.post} </motion.span>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
