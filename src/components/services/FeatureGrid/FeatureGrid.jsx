import React from 'react';
import styles from './FeatureGrid.module.css';

const FeatureGrid = ({ heading, subheading, features }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading} dangerouslySetInnerHTML={{ __html: heading }} />
          <p className={styles.subheading}>{subheading}</p>
        </div>
        
        <div className={styles.grid}>
          {features?.map((item, index) => (
            <div key={index} className={styles.cardWrapper}>
              {/* Icon jo border ke upar overlap karega */}
              <div className={styles.iconOverlay}>
                <div className={styles.hexagon}>
                  {item.icon}
                </div>
              </div>
              
              <div className={styles.card}>
                <div className={styles.content}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
