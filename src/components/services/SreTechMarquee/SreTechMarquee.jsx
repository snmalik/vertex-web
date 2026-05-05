import React from 'react';
import styles from './SreTechMarquee.module.css';
import { resolveIcon } from '../../../utils/iconResolver';

const SreTechMarquee = ({ heading = "The SRE Tech Stack We Master", items = [] }) => {
  // Duplicate items for seamless infinite loop effect
  const loopedTools = [...items, ...items];

  return (
    <div className={styles.marqueeContainer}>
      <h3 className={styles.title}>{heading}</h3>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeContent}>
          {loopedTools.map((tech, index) => (
            <div key={index} className={styles.techItem}>
              <div className={styles.iconBox}>
                {typeof tech.icon === 'string' ? resolveIcon(tech.icon) : tech.icon}
              </div>
              <div className={styles.textBox}>
                <span className={styles.name}>{tech.title}</span>
                <span className={styles.label}>{tech.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SreTechMarquee;

