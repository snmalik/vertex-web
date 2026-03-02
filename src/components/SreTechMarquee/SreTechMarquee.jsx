import React from 'react';
import styles from './SreTechMarquee.module.css';
import { 
  BsReception4, BsBarChart, BsSearch, 
  BsCheckAll, BsCloudCheck, BsActivity 
} from "react-icons/bs";

const techStack = [
  { icon: <BsReception4 />, name: "Prometheus", label: "Metrics Collection" },
  { icon: <BsBarChart />, name: "Grafana", label: "Visualization" },
  { icon: <BsSearch />, name: "ELK Stack", label: "Log Analytics" },
  { icon: <BsCloudCheck />, name: "Datadog", label: "Cloud Monitoring" },
  { icon: <BsCheckAll />, name: "Jaeger", label: "Distributed Tracing" },
  { icon: <BsActivity />, name: "New Relic", label: "APM Insights" },
  { icon: <BsReception4 />, name: "Prometheus", label: "Metrics Collection" }, // Duplicate for seamless loop
  { icon: <BsBarChart />, name: "Grafana", label: "Visualization" },
];

const SreTechMarquee = () => {
  return (
    <div className={styles.marqueeContainer}>
      <h3 className={styles.title}>The SRE Tech Stack We Master</h3>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeContent}>
          {techStack.map((tech, index) => (
            <div key={index} className={styles.techItem}>
              <div className={styles.iconBox}>{tech.icon}</div>
              <div className={styles.textBox}>
                <span className={styles.name}>{tech.name}</span>
                <span className={styles.label}>{tech.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SreTechMarquee;