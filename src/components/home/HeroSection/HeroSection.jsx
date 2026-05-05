// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";
// import hero_1 from '../../../assets/image/hero1.png'
import mouse from '../../../assets/image/scroll2.svg';
import scroll from '../../../assets/image/scroll2box.svg';
import shape_4 from '../../../assets/image/shape-4.svg';
import shape_5 from '../../../assets/image/shape-5.svg';
import shape_51 from '../../../assets/image/shape-51.svg';
import shape_8 from '../../../assets/image/shape-6.svg';
import shape_7 from '../../../assets/image/shape-7.svg';

const HeroSection = ({ topText, title, description, primaryBtn, secondaryBtn, trustLine, img1, img2 }) => {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.heroContent}>

        <div className={styles.heroText}>

          <h5 className={styles.topText}>{topText}</h5>

          <h2
            className={styles.heroSubtitle}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>


          <p className={styles.heroDescription}>
            {description}
          </p>


          <div className={styles.buttonGroup}>

            <motion.button
              className={styles.heroButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
            >
              {primaryBtn}
            </motion.button>


            <motion.button
              className={styles.heroButtonSecondary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#services'}
            >
              {secondaryBtn}
            </motion.button>
          </div>


          <div className={styles.trustLine} style={{ marginTop: '20px', fontSize: '1rem', opacity: 0.8 }}>
            {trustLine}
          </div>

          <div className={styles.angleFive}>
            <img src={shape_8} alt="" />
          </div>
          <div className={styles.angleSix}>
            <img src={shape_4} alt="" />
          </div>
        </div>


        <div className={styles.heroImages}>
          <img
            src={img1 || ""}
            alt="Hero Background"
            className={styles.heroImgLeft}
          />
          <div className={styles.heroImgRightTop}>
            <motion.img
              src={img2 || ""}
              alt="Hero Accent"
              className={styles.heroImgRight}
            />
          </div>
          <div className={styles.angleOne}>
            <img src={shape_7} alt="" />
          </div>
          <div className={styles.angleTwo}>
            <img src={shape_8} alt="" />
          </div>
          <div className={styles.angleThree}>
            <img src={shape_5} alt="" />
          </div>
          <div className={styles.angleFour}>
            <img src={shape_51} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.mouse}>
        <div className={styles.mouseWrap}>
          <img src={scroll} alt="" />
          <div className={styles.scroolIn}>
            <img src={mouse} alt="" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;

