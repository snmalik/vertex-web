import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../style/ManagedITProcess.module.css';

const ManagedIT = () => {
  return (
    <div className={styles.mainWrapper}>
      
      {/* SECTION 1: GLASS HERO */}
      <section className={styles.heroSection}>
        <div className={styles.meshGradient}></div>
        <div className={styles.wavesWrapper}>
            <div className={`${styles.wave} ${styles.w1}`}></div>
            <div className={`${styles.wave} ${styles.w2}`}></div>
        </div>
        
        <div className={styles.container}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className={styles.heroGlassCard}
          >
            <span className={styles.tag}>Expert IT Management</span>
            <h1>Transforming Your Challenges Into <br/> <span>Competitive Advantages</span></h1>
            <p>Proactive monitoring, disaster recovery, and 24/7 support tailored for your business growth.</p>
            <button className={styles.primaryBtn}>Get Started Now</button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: 3D SERVICES (PC, SERVER, CLOUD) */}
      <section className={styles.serviceSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Comprehensive Data Protection</h2>
            <p>We ensure your information is secured, stored, and can be retrieved whenever there is any calamity.</p>
          </div>
          
          <div className={styles.glassGrid}>
            {[
              { title: 'PC Backup', icon: '💻', desc: 'Secure backup for desktops with 24/7 recovery assist.' },
              { title: 'Server Backup', icon: '🛡️', desc: 'Interval backups to guarantee data delivery and minimize loss.' },
              { title: 'Cloud Backup', icon: '☁️', desc: 'Risk-free cloud storage accessible from anywhere.' }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className={styles.serviceCard}
                whileHover={{ y: -15, rotateX: 5, rotateY: 5 }}
              >
                <div className={styles.iconBox}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: ZIG-ZAG TIMELINE */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <h2 className={styles.timelineTitle}>Our Execution Roadmap</h2>
          <div className={styles.timelineContainer}>
            <div className={styles.centerLine}></div>
            {[
              { id: '01', t: 'Assessment & Planning', d: 'Identify recovery goals and evaluate threats.' },
              { id: '02', t: 'Backup Strategy', d: 'Designing actual strategies to fit your infrastructure.' },
              { id: '03', t: 'Implementation', d: 'Setting up daily/weekly backups with encryption.' }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                className={`${styles.timelineStep} ${i % 2 === 0 ? styles.left : styles.right}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className={styles.timelineContent}>
                  <div className={styles.stepId}>{step.id}</div>
                  <h4>{step.t}</h4>
                  <p>{step.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagedIT;