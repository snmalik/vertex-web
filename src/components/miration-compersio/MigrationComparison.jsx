import React from 'react';
import styles from './MigrationComparison.module.css';


const MigrationComparison = () => {
  const points = [
    { label: "Scaling", old: "Manual / Weeks to Provision", new: "Auto-Scaling / Seconds" },
    { label: "Security", old: "Perimeter-based / Static", new: "Zero Trust / Dynamic IAM" },
    { label: "Updates", old: "Scheduled Downtime Required", new: "Blue-Green / Canary Deployments" },
    { label: "Costs", old: "Fixed CAPEX (Idle Resources)", new: "Pay-as-you-go OPEX" }
  ];

  return (
    <div style={{backgroundColor:"#F9FAFF", padding:"40px"}}>
    <section className={styles.compWrapper}>
      <div className={styles.container}>
        <h3 className={styles.sub}>The Strategic Shift</h3>
        <div className={styles.table}>
          <div className={styles.headerRow}>
            <span>Metric</span>
            <span>Legacy Infrastructure</span>
            <span>Cloud-Native (Vertex Pro)</span>
          </div>
          {points.map((p, i) => (
            <div key={i} className={styles.row}>
              <span className={styles.label}>{p.label}</span>
              <span className={styles.old}>{p.old}</span>
              <span className={styles.new}>{p.new}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};
export default MigrationComparison;