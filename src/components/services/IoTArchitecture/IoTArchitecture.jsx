import React from 'react';
import styles from './IoTArchitecture.module.css';
import { resolveIcon } from '../../../utils/iconResolver';

const IoTArchitecture = ({ content }) => {
  const { title, nodeLeft, nodeCenter, nodeRight } = content || {};

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{title || "The IoT Edge Ecosystem"}</h2>
        
        <div className={styles.visualizer}>
          {/* Left Node */}
          <div className={styles.node} data-aos="fade-right">
            <div className={styles.iconBox}>
              {resolveIcon(nodeLeft?.icon || "BsDeviceSsd")}
            </div>
            <span>{nodeLeft?.label || "Smart Sensors"}</span>
          </div>

          <div className={styles.line}></div>

          {/* Center: Edge Gateway */}
          <div className={`${styles.node} ${styles.centerNode}`} data-aos="zoom-in">
            <div className={styles.iconBox}>
              {resolveIcon(nodeCenter?.icon || "BsHddNetwork")}
            </div>
            <div className={styles.pulse}></div>
            <span>{nodeCenter?.label || "Edge Gateway"}</span>
            {nodeCenter?.subLabel && <small>{nodeCenter.subLabel}</small>}
          </div>

          <div className={styles.line}></div>

          {/* Right Node */}
          <div className={styles.node} data-aos="fade-left">
            <div className={styles.iconBox}>
              {resolveIcon(nodeRight?.icon || "BsCloudCheck")}
            </div>
            <span>{nodeRight?.label || "Cloud Insights"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTArchitecture;

