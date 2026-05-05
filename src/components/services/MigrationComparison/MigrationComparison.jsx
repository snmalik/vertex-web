import React from 'react';
import styles from './MigrationComparison.module.css';

const MigrationComparison = ({ content }) => {
  const { subtitle, headers, points } = content || {};

  const defaultHeaders = ["Metric", "Legacy Infrastructure", "Cloud-Native (Vertex Pro)"];
  const displayHeaders = headers || defaultHeaders;

  const defaultPoints = [
    { label: "Scaling", old: "Manual / Weeks to Provision", new: "Auto-Scaling / Seconds" },
    { label: "Security", old: "Perimeter-based / Static", new: "Zero Trust / Dynamic IAM" },
    { label: "Updates", old: "Scheduled Downtime Required", new: "Blue-Green / Canary Deployments" },
    { label: "Costs", old: "Fixed CAPEX (Idle Resources)", new: "Pay-as-you-go OPEX" }
  ];
  const displayPoints = points || defaultPoints;

  return (
    <div style={{backgroundColor:"#F9FAFF", padding:"40px"}}>
    <section className={styles.compWrapper}>
      <div className={styles.container}>
        <h3 className={styles.sub}>{subtitle || "The Strategic Shift"}</h3>
        <div className={styles.table}>
          <div className={styles.headerRow}>
            {displayHeaders.map((header, i) => (
              <span key={i}>{header}</span>
            ))}
          </div>
          {displayPoints.map((p, i) => (
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
