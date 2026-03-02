import React from 'react';
import styles from './Slider.module.css';
import logo_1 from '../../assets/image/logo_1.jpeg';
import logo_2 from '../../assets/image/logo_2.jpg';
import logo_3 from '../../assets/image/logo_3.png';
import logo_4 from '../../assets/image/logo_4.png';
import logo_5 from '../../assets/image/logo_5.png';
import logo_6 from '../../assets/image/logo_6.jpg';
import logo_7 from '../../assets/image/logo_7.png';

const SliderLogo = () => {
  const logos = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6, logo_7];
  
  const doubleLogos = [...logos, ...logos];

  return (
    <fieldset className={styles.fieldSet}>
      <legend className={styles.legend}>Partners</legend>
      
      <div className={styles.sliderContainer}>
        <div className={styles.sliderTrack}>
          {doubleLogos.map((logo, index) => (
            <div className={styles.slide} key={index}>
              <img src={logo} alt={`Partner ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </fieldset>
  );
};

export default SliderLogo;