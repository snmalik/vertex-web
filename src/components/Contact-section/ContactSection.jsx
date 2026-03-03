/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [result, setResult] = useState("");

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append("access_key", "0f2a6f82-7c46-4e82-8da1-1929d5a1f046");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Network error. Please try again later.");
    }

   
    setTimeout(() => setResult(""), 5000);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        {/* LEFT SIDE */}
        <motion.div
          className={styles.left}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <span className={styles.subTitle}>Get In Touch</span>
          <h2>Let’s Power Your Business With VertexPro</h2>
          <div className={styles.line}></div>

          <p>
            At VertexPro, we deliver cutting-edge IT solutions including Managed
            IT Services, CyberSecurity protection, Cloud Infrastructure, DevOps
            automation, and Database management. our experts are ready to help
            you succeed.
          </p>

          <div className={styles.contactInfo}>
            <div className={styles.infoBox}>
              <div className={styles.iconCircle}>
                <FaPhoneAlt />
              </div>
              <div className={styles.infoContent}>
                <span>Call Us</span>
                <p>🇵🇰 (+92) 315 6661667</p>
                <p>🇺🇸 (+1) 929 2072406</p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.iconCircle}>
                <FaEnvelope />
              </div>
              <div className={styles.infoContent}>
                <span>Email Us</span>
                <p>info@vertexpro.net</p>
                <p>support@vertexpro.net</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className={styles.right}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form className={styles.form} onSubmit={handleEmailSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required />

            <label>Email Address</label>
            <input type="email" name="email" placeholder="Enter your email" required />

            <label>How can we help you?</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message"
              required
            ></textarea>

            <button type="submit" disabled={result === "Sending...."}>
              {result === "Sending...." ? "Sending..." : "Submit Now"}
            </button>

            {/* Status Message */}
            {result && (
              <p style={{ 
                marginTop: "15px", 
                fontSize: "14px", 
                color: result.includes("Successfully") ? "#4CAF50" : "#f44336",
                fontWeight: "bold"
              }}>
                {result}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;