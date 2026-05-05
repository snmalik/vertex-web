import React from "react";
import styles from "./ContactCTA.module.css";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactCTA = ({ data = {} }) => {
  // Pull from props with fallbacks to avoid crashes
  const title = data.title || "Ready to Secure & Scale Your Enterprise?";
  const description = data.description || "Join global organizations that trust Vertex Pro for resilient infrastructure and 24/7 security operations. Let's discuss your technical roadmap.";
  const rawNumber = data.whatsappNumber || "447534038019";

  // Clean the number: remove +, spaces, dashes, or parentheses
  const whatsappNumber = rawNumber.replace(/\D/g, "");

  const whatsappMessage = data.whatsappMessage || "Hi Vertex Pro, I'm interested in your services.";
  const whatsappButtonText = data.whatsappButtonText || "Chat on WhatsApp";
  const contactButtonText = data.contactButtonText || "Get in Touch";

  return (
    <section className={styles.finalCTA}>
      <div className="container">
        <div className={styles.ctaBox}>
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <p>{description}</p>
          <div className={styles.btnGroup}>

            {/* WhatsApp Button */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.primaryBtn}
            >
              <FaWhatsapp className={styles.icon} />
              <span>{whatsappButtonText}</span>
            </motion.a>

            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={styles.secondaryBtn}
              >
                <span>{contactButtonText}</span>
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
