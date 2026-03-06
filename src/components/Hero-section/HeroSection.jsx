// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";
// import hero_1 from '../../assets/image/hero1.png'
import hero_2 from '../../assets/image/h10-hero-left.png';
import hero_3 from '../../assets/image/h10-hero-right.png';
import mouse from '../../assets/image/scroll2.svg';
import scroll from '../../assets/image/scroll2box.svg';
import shape_4 from '../../assets/image/shape-4.svg';
import shape_5 from '../../assets/image/shape-5.svg';
import shape_51 from '../../assets/image/shape-51.svg';
import shape_8 from '../../assets/image/shape-6.svg';
import shape_7 from '../../assets/image/shape-7.svg';

const HeroSection = () => {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.heroContent}>
    
        <div className={styles.heroText}>
  
  <h5 className={styles.topText}>Global Infrastructure & Security Experts</h5>

  <h2 className={styles.heroSubtitle}>
    Enterprise IT Infrastructure & <span>Cybersecurity Solutions</span>
  </h2>
  
  
  <p className={styles.heroDescription}>
    We design, secure, and manage scalable IT environments that keep your business operational, secure, and future-ready.
  </p>


 <div className={styles.buttonGroup}>
  
  <motion.button
    className={styles.heroButton}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => window.location.href = '/contact'} 
  >
    Schedule Consultation
  </motion.button>

  
  <motion.button
    className={styles.heroButtonSecondary}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => window.location.href = '#services'}
  >
    Explore Solutions
  </motion.button>
</div>


  <div className={styles.trustLine} style={{ marginTop: '20px', fontSize: '1rem', opacity: 0.8 }}>
    <span>✔ 15+ Years Experience</span> | <span>✔ Enterprise Infrastructure</span> | <span>✔ 24/7 Global Support</span>
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
            src={hero_2 }
            alt="Team working"
            className={styles.heroImgLeft}
          />
<div className={styles.heroImgRightTop}>
          <motion.img
            src={hero_3 }
            alt="Team collaborating"
            className={styles.heroImgRight}
            
         
          />
          </div>
          <div className={styles.angleOne}>
            <img src={ shape_7} alt="" />
          </div>
          <div className={styles.angleTwo}>
            <img src={ shape_8} alt="" />
          </div>
          <div className={styles.angleThree}>
            <img src={ shape_5} alt="" />
          </div>
          <div className={styles.angleFour}>
            <img src={ shape_51} alt="" />
          </div>
        </div>
      </div>
      <div className= {styles.mouse}>
        <div className= {styles.mouseWrap}>
          <img src={scroll } alt="" />
          <div className= {styles.scroolIn}>
<img src={mouse} alt="" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
