import React from 'react';
import styles from './Timeline.module.css';

const Timeline = ({ sectionTitle, steps }) => {
  return (
    <section className={styles.timelineSection}>
      <div className={styles.container}>
      
        <h2 className={styles.mainTitle}>{sectionTitle}</h2>

        <div className={styles.timelineWrapper}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepItem}>
            
              <div className={styles.indicatorSide}>
                <div className={styles.numberBox}>{step.id}</div>
                {index !== steps.length - 1 && <div className={styles.verticalLine}></div>}
              </div>

            
              <div className={styles.contentSide}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;