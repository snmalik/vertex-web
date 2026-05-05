import React from 'react';
import styles from './DevopsFlow.module.css';

const DevopsFlow = ({ 
  subtitle = "Our Process", 
  title = "The 8-Step DevOps Pipeline", 
  steps = [] 
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.subtitle}>{subtitle}</span>
        <h2 className={styles.heading}>{title}</h2>

        <div className={styles.gridContainer}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={styles.stepCard}
              style={{ '--i': index }} // Custom property for staggered animation
            >
              <div className={styles.headerRow}>
                <div className={styles.iconBox}>{step.icon}</div>
                <div className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</div>
              </div>
              <div className={styles.content}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>

              {/* Connector line with moving light effect */}
              {(index + 1) % 4 !== 0 && (
                <div className={styles.lineConnector}>
                  <div className={styles.glowBeam}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevopsFlow;
