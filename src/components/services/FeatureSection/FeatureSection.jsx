import React from 'react';
import styles from './FeatureSection.module.css';
import { resolveIcon } from '../../../utils/iconResolver';

const FeatureSection = ({ mainTitle, features = [] }) => {
  return (
    <section className={styles.featureWrapper}>
      <div className={styles.container}>

        <h2 className={styles.mainTitle}>{mainTitle}</h2>

        <div className={styles.featureGrid}>
          {features.map((item, index) => (
            <div key={index} className={styles.featureCard}>

              <div className={styles.iconCircle}>
                {typeof item.icon === 'string' ? resolveIcon(item.icon) : item.icon}
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

