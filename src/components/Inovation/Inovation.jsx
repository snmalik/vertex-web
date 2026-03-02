import React from 'react';
import styles from './Inovation.module.css';

const Innovation = ({ title, description, row1, row2 }) => {
  // Fallback logos agar props na milein
  const defaultLogos = [
    { name: 'Azure', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
    { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' }
  ];
  

  const r1 = row1 || defaultLogos;
  const r2 = row2 || defaultLogos;

  return (
    <section className={styles.innovationSection}>
      <div className={styles.container}>
        
        <div className={styles.logoWrapper}>
          {/* Row 1 */}
          <div className={styles.sliderRow}>
            <div className={`${styles.logoSlider} ${styles.slideLeft}`}>
              {[...r1, ...r1].map((logo, i) => (
                <div key={i} className={styles.logoCard}><img src={logo.url} alt={logo.name} /></div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className={styles.sliderRow}>
            <div className={`${styles.logoSlider} ${styles.slideRight}`}>
              {[...r2, ...r2].map((logo, i) => (
                <div key={i} className={styles.logoCard}><img src={logo.url} alt={logo.name} /></div>
              ))}
            </div>
          </div>

          {/* Row 3 (Mixed) */}
          <div className={styles.sliderRow}>
            <div className={`${styles.logoSlider} ${styles.slideLeftFast}`}>
              {[...r1, ...r2].map((logo, i) => (
                <div key={i} className={styles.logoCard}><img src={logo.url} alt={logo.name} /></div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.divider}></div>
          <p className={styles.description}>{description}</p>
        </div>

      </div>
    </section>
  );
};

export default Innovation;