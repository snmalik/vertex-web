import React from 'react';
import { motion } from 'framer-motion';

import { 
  IoLocationOutline, 
  IoCallOutline, 
  IoMailOutline, 
  IoSearchOutline, 
  IoPaperPlaneOutline 
} from "react-icons/io5";
import styles from './Contact.module.css';

const ContactSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className={styles.contactWrapper}>
      <motion.div {...fadeInUp}>
        <h1 className={styles.title}>We're Just a Message Away!</h1>
        <p className={styles.subtitle}>
          Your needs come first. Whether you have questions, concerns, or need support, our team is always ready to help. Reach out anytime.
        </p>
        <button className={styles.connectBtn}>Let's Connect</button>
      </motion.div>

      <motion.div 
        className={styles.cardsContainer}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
     
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <IoLocationOutline className={styles.headerIcon} size={35} />
            <div className={styles.labelWrapper}>
              <h3>Location</h3>
              <span className={styles.subLabel}>Visit to explore the world</span>
            </div>
            
            <h4 className={styles.countryTitle}>Pakistan</h4>
            <p className={styles.infoText}>
              13 N, Gurumangat Road,<br /> Industrial Area Gulberg II,<br /> Lahore, Pakistan 54000
            </p>

            <h4 className={styles.countryTitle}>USA</h4>
            <p className={styles.infoText}>
              3400 N Central Expy Suite #110-233,<br /> Richardson, TX 75080, United States
            </p>
          </div>
          <IoSearchOutline className={styles.watermark} />
        </div>

        {/* Call Card */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <IoCallOutline className={styles.headerIcon} size={35} />
            <div className={styles.labelWrapper}>
              <h3>Make a Call</h3>
              <span className={styles.subLabel}>Let's talk with our experts</span>
            </div>

            <h4 className={styles.countryTitle}>Pakistan</h4>
            <p className={styles.infoText}>(+92) 3156661667</p>

            <h4 className={styles.countryTitle}>USA</h4>
            <p className={styles.infoText}>(+1) 9292072406</p>
          </div>
          <IoCallOutline className={styles.watermark} />
        </div>

        {/* Mail Card */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <IoMailOutline className={styles.headerIcon} size={35} />
            <div className={styles.labelWrapper}>
              <h3>Send a Mail</h3>
              <span className={styles.subLabel}>Don't hesitate to mail</span>
            </div>

            <h4 className={styles.countryTitle}>Email I'D</h4>
            <p className={styles.infoText}>
              info@vertexpro.net<br />
              support@vertexpro.net
            </p>
          </div>
          <IoPaperPlaneOutline className={styles.watermark} />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;