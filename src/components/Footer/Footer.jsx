import React from 'react';
import css from '../Footer/Footer.module.scss';

const Footer = () => {
  return (
    <div className={css.wrapper}>
        <div className={`paddings innerWidth ${css.conatiner}`}>
            <div className={`primaryText ${css.left}`}>  
                <span> Let's make something </span>
                <span> amazing together. </span>  <br></br>
                <span className={css.org}> Start by <u> saying hi </u> </span>
            </div>
            <div className={css.right}> 
              <span className={css.inf}> Information </span>
              <span> Noida Sector 15 </span>
              <span> Pin- 201301 </span>
              <span> Works </span>
              <span> Experience </span>
            </div>
        </div>
    </div>

  )
}

export default Footer
