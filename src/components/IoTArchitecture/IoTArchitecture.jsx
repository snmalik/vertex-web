import React from 'react';
import styles from './IoTArchitecture.module.css';
import { BsHddNetwork, BsCloudCheck, BsDeviceSsd } from 'react-icons/bs';

const IoTArchitecture = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>The IoT Edge Ecosystem</h2>
        
        <div className={styles.visualizer}>
          {/* Left: Sensors */}
          <div className={styles.node} data-aos="fade-right">
            <BsDeviceSsd className={styles.mainIcon} />
            <span>Smart Sensors</span>
          </div>

          <div className={styles.line}></div>

          {/* Center: Edge Gateway */}
          <div className={`${styles.node} ${styles.centerNode}`} data-aos="zoom-in">
            <BsHddNetwork className={styles.mainIcon} />
            <div className={styles.pulse}></div>
            <span>Edge Gateway</span>
            <small>Local Processing</small>
          </div>

          <div className={styles.line}></div>

          {/* Right: Cloud */}
          <div className={styles.node} data-aos="fade-left">
            <BsCloudCheck className={styles.mainIcon} />
            <span>Cloud Insights</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default IoTArchitecture;