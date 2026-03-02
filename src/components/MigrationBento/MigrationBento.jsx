import React from 'react';
import styles from './MigratiomBento.module.css';
import { motion } from 'framer-motion';
import { BsCloudCheck, BsLightningCharge, BsShieldLock, BsBarChartSteps, BsGearWideConnected, BsCpu } from 'react-icons/bs';

const MigrationBento = () => {
  const data = [
    { id: 1, size: 'large', title: 'Zero-Downtime Migration', desc: 'We sync your live databases in real-time, ensuring a seamless switch-over without interrupting your business operations.', icon: <BsLightningCharge />, tag: 'High Availability' },
    { id: 2, size: 'small', title: 'Cost Guard', desc: 'Immediate 30% reduction in OpEx.', icon: <BsBarChartSteps /> },
    { id: 3, size: 'small', title: 'Security First', desc: 'AES-256 encryption during transit.', icon: <BsShieldLock /> },
    { id: 4, size: 'medium', title: 'Infrastructure as Code (IaC)', desc: 'We automate your entire cloud environment using Terraform and CloudFormation for repeatable, error-free deployments.', icon: <BsGearWideConnected />, tag: 'Automation' },
    { id: 5, size: 'medium', title: 'Legacy Modernization', desc: 'Transforming monolithic apps into microservices during the migration phase.', icon: <BsCpu />, tag: 'Modernization' },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Enterprise Cloud Transformation</h2>
        <div className={styles.bentoGrid}>
          {data.map((item) => (
            <motion.div 
              key={item.id}
              className={`${styles.bentoBox} ${styles[item.size]}`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.icon}>{item.icon}</div>
              {item.tag && <span className={styles.tag}>{item.tag}</span>}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MigrationBento;