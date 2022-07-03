import React from 'react';
import styles from './Banner.module.css';
import banner from "../images/banner.jpg";
const Banner = () => {
  return(
    <div className={styles.container}>
        <img src={banner} alt="banner" />
        <div className={styles.textContainer}>
            <h1>Amirhossein</h1>
            <p>
                We Are Learning <span>React.js</span>
            </p>
        </div>
    </div>
  );
};

export default Banner;