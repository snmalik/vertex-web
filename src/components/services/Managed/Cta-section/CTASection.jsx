import React from 'react';
import styles from './CTA.module.css';
import { BiRocket } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';

const CTASection = () => {

  const whatsappNumber = "447534038019";
  const message = "Hi Compufy, I'm interested in your Managed IT & Backup services. Can we discuss?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className={styles.ctaWrapper}>
      <div className={styles.ctaContainer}>
        <div className={styles.content}>
          <div className={styles.iconBox}>
            <BiRocket />
          </div>
          <h2 className={styles.heading}>
            Ready to Secure Your Business Future?
          </h2>
          <p className={styles.subtext}>
            Don't wait for a disaster to happen. Chat with our experts or request a call back today.
          </p>
        </div>

        <div className={styles.actionArea}>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <FaWhatsapp className={styles.btnIcon} /> Chat on WhatsApp
          </a>

          <button className={styles.secondaryBtn}>Get a Free Quote</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
