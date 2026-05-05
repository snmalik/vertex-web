import React from 'react';
import styles from './CloudInnovation.module.css';

const logosRow1 = [
  { name: 'Azure', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
  { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Oracle', url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
];

const logosRow2 = [
  { name: 'Google Cloud', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
  //   { name: 'VMware', url: 'https://upload.wikimedia.org/wikipedia/commons/9/98/VMware_logo.svg' },
  { name: 'MetaCloud', url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' },
  { name: 'Ingrow', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
];

const CloudInnovation = () => {
  return (
    <section className={styles.innovationSection}>
      <div className={styles.container}>


        <div className={styles.logoWrapper}>


          <div className={styles.sliderRow}>
            <div className={`${styles.logoSlider} ${styles.slideLeft}`}>
              {[...logosRow1, ...logosRow1].map((logo, i) => (
                <div key={i} className={styles.logoCard}><img src={logo.url} alt={logo.name} /></div>
              ))}
            </div>
          </div>


          <div className={styles.sliderRow}>
            <div className={`${styles.logoSlider} ${styles.slideRight}`}>
              {[...logosRow2, ...logosRow2].map((logo, i) => (
                <div key={i} className={styles.logoCard}><img src={logo.url} alt={logo.name} /></div>
              ))}
            </div>
          </div>


          <div className={styles.sliderRow}>
            <div className={`${styles.logoSlider} ${styles.slideLeftFast}`}>
              {[...logosRow1, ...logosRow2].map((logo, i) => (
                <div key={i} className={styles.logoCard}><img src={logo.url} alt={logo.name} /></div>
              ))}
            </div>
          </div>

        </div>


        <div className={styles.textContent}>
          <h2 className={styles.title}>Lead Your Industry Forward with Strategic Cloud Innovation</h2>
          <div className={styles.divider}></div>
          <p className={styles.description}>
            Through our cloud specialist teams, we deliver services over AWS, Microsoft Azure, and Google Cloud.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CloudInnovation;
