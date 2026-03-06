import React from "react";
import styles from "./ContactCTA.module.css";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  // WhatsApp number mein '+' nikaal diya hai, yehi standard hai
  const whatsappNumber = "447534038019"; 
  

  return (
    <section className={styles.finalCTA}>
      <div className="container">
        <div className={styles.ctaBox}>
          <h2>Ready to Secure & Scale Your Enterprise?</h2>
          <p>
            Join global organizations that trust Vertex Pro for resilient infrastructure 
            and 24/7 security operations. Let's discuss your technical roadmap.
          </p>
          <div className={styles.btnGroup}>
            
            {/* WhatsApp Button */}
            <motion.a 
              href={`https://wa.me/${whatsappNumber}?text=Hi%20Vertex%20Pro,%20I'm%20interested%20in%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className={styles.primaryBtn}
            >
              <FaWhatsapp className={styles.icon} />
              <span>Chat on WhatsApp</span>
            </motion.a>

       
           <Link to="/contact" style={{ textDecoration: 'none' }}>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                className={styles.secondaryBtn}
              >
                <span>Get in Touch</span>
                <FaArrowRight className={styles.iconRight} />
              </motion.div>
            </Link>
         

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;