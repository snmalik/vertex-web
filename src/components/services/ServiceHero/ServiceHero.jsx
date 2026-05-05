import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServiceHero.module.css';

const ServiceHero = ({ tag, title, description, buttonText }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.meshGradient}></div>
      <div className={styles.wavesWrapper}>
        <div className={`${styles.wave} ${styles.w1}`}></div>
        <div className={`${styles.wave} ${styles.w2}`}></div>
      </div>

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.heroGlassCard}
        >
          {tag && <span className={styles.tag}>{tag}</span>}
          <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
          <p>{description}</p>
          {buttonText && <button className={styles.primaryBtn}>{buttonText}</button>}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
