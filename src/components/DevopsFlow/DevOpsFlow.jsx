import React from 'react';
import styles from './DevopsFlow.module.css';
import { 
  BsTerminal, BsCodeSlash, BsBoxSeam, BsShieldCheck, 
  BsRocketTakeoff, BsGear, BsEye, BsCloudCheck 
} from "react-icons/bs";

const devOpsSteps = [
  { icon: <BsTerminal />, title: "Plan", desc: "Strategy & Requirement Analysis" },
  { icon: <BsCodeSlash />, title: "Code", desc: "Version Control & Development" },
  { icon: <BsBoxSeam />, title: "Build", desc: "Automated Compiling & Packaging" },
  { icon: <BsShieldCheck />, title: "Security", desc: "DevSecOps & Vulnerability Scans" },
  { icon: <BsRocketTakeoff />, title: "Deploy", desc: "Zero-Downtime Orchestration" },
  { icon: <BsGear />, title: "Operate", desc: "Infrastructure as Code (IaC)" },
  { icon: <BsEye />, title: "Monitor", desc: "Performance & Health Tracking" },
  { icon: <BsCloudCheck />, title: "Optimize", desc: "Feedback & Resource Scaling" }
];

const DevopsFlow = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.subtitle}>Our Process</span>
        <h2 className={styles.heading}>The 8-Step DevOps Pipeline</h2>
        
        <div className={styles.gridContainer}>
          {devOpsSteps.map((step, index) => (
            <div 
              key={index} 
              className={styles.stepCard} 
              style={{ '--i': index }} // Custom property for staggered animation
            >
              <div className={styles.headerRow}>
                <div className={styles.iconBox}>{step.icon}</div>
                <div className={styles.stepNumber}>0{index + 1}</div>
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