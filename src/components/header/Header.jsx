import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiCloudDownload } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  // Now Here we use React Hooks
  const [menuOpened, setmenuOpened] = useState(false);
  const HeaderShadow = useHeaderShadow();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: HeaderShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Satyam Maurya</div>

          <ul
            style={getMenuStyles(menuOpened)}
            className={`flexCenter ${css.menu}`}
          >
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#views">People Views</a>
            </li>
            <li
              className={`flexCenter ${css.phone}`}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1YR6obRHlWlccm1gKuEjwa1HEXmqm0WUz/view?usp=sharing"
                )
              }
            >
              <h4 style={{ color: "green" }}> DOWNLOAD MY RESUME</h4>
              <BiCloudDownload size={"30px"} />
            </li>
          </ul>
          {/* For medium and small screen we have to use this hooks */}
          <div
            className={css.menuIcon}
            onClick={() => setmenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={25} />
          </div>
        </div>
      </motion.div>
    );
  };

export default Header;
