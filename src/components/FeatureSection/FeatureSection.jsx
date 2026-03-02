import React from 'react';
import styles from './FeatureSection.module.css';

const FeatureSection = ({ mainTitle, features }) => {
  return (
    <section className={styles.featureWrapper}>
      <div className={styles.container}>
      
        <h2 className={styles.mainTitle}>{mainTitle}</h2>

        <div className={styles.featureGrid}>
          {features.map((item, index) => (
            <div key={index} className={styles.featureCard}>
           
              <div className={styles.iconCircle}>
                {item.icon}
              </div>

            
              <div className={styles.textDetails}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;