import React from 'react';
import styles from './Slider.module.css';

const SliderLogo = ({ logos }) => {
  const dynamicLogos = logos || [];

  // Hide the slider completely if no logos have been uploaded yet in the admin dashboard.
  const activeLogos = dynamicLogos.filter(l => l.url);

  // Double the logos to create the infinite scroll effect seamlessly
  const doubleLogos = [...activeLogos, ...activeLogos];

  // Prevent crashing or empty UI if something went wrong
  if (activeLogos.length === 0) return null;

  return (
    <div className="container">

      <fieldset className={styles.fieldSet}>
        <legend className={styles.legend}></legend>

        <div className={styles.sliderContainer}>
          <div className={styles.sliderTrack}>
            {doubleLogos.map((logo, index) => (
              <div className={styles.slide} key={index}>
                <img src={logo.url} alt={logo.name || `Partner ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default SliderLogo;
