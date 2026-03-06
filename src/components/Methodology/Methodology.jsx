import React from "react";
import { motion } from "framer-motion";
import styles from "./Methodology.module.css";

const steps = [
  { title: "Discovery & Audit", text: "We perform a deep-dive technical audit of your existing infrastructure and security gaps." },
  { title: "Strategic Architecture", text: "Our experts design a scalable, secure, and cost-optimized roadmap tailored to your goals." },
  { title: "Seamless Deployment", text: "Zero-downtime execution and migration handled by our senior engineering team." },
  { title: "24/7 Managed Operations", text: "Continuous monitoring, threat detection, and proactive optimization to ensure 99.9% uptime." }
];

const Methodology = () => {
  return (
    <section className={styles.processSection}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.subtitle}>Execution Framework</span>
          <h2 className={styles.title}>How We Deliver Results</h2>
        </motion.div>

        <div className={styles.processGrid}>
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className={styles.stepCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <span className={styles.stepNumber}>{step.no}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              
              {/* Subtle line for visual flow */}
              <div style={{
                marginTop: '25px',
                width: '40px',
                height: '2px',
                background: '#5e5ef0'
              }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;