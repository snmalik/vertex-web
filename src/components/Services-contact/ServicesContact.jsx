import React, { useState } from "react";
import styles from "./ServiceContact.module.css";
import { BsEnvelope, BsGeoAlt, BsTelephone, BsSend } from "react-icons/bs";

const ServiceContact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Aapki di hui Access Key
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
      console.log("Fetch Error", error);
      setResult("Network error. Please check your connection.");
    }
    
    // 5 second baad status message gayab karne ke liye (Optional)
    setTimeout(() => setResult(""), 5000);
  };

  return (
    <section className={styles.contactWrapper}>
      <div className={styles.container}>
        
        {/* Left Side: Info Cards */}
        <div className={styles.infoSide}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Have a project in mind? Let's build something great together.
          </p>

          <div className={styles.infoStyle}>
            <div className={styles.infoCard}>
              <div className={styles.iconCircle}><BsGeoAlt /></div>
              <div className={styles.cardContent}>
                <h4>Pakistan</h4>
                <p>13 N, Gurumangat Road,<br/>Industrial Area Gulberg II,<br/>Lahore, Pakistan 54000</p>
                <h4>USA</h4>
                <p>3400 N Central Expy Suite #110-233,<br/>Richardson, TX 75080, United States</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconCircle}><BsTelephone /></div>
              <div className={styles.cardContent}>
                <h4>Pakistan</h4>
                <p>(+92) 3156661667</p>
                <h4>USA</h4>
                <p>(+1) 9292072406</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconCircle}><BsEnvelope /></div>
              <div className={styles.cardContent}>
                <h4>Email</h4>
                <p>info@vertexpro.net</p>
                <p>support@vertexpro.net</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className={styles.formSide}>
          <form className={styles.contactForm} onSubmit={onSubmit}>
            <div className={styles.inputGroup}>
              {/* Important: 'name' attribute must match Web3Forms requirements */}
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            
            <input type="text" name="subject" placeholder="Subject" required />
            
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            
            <button type="submit" className={styles.submitBtn}>
              {result === "Sending...." ? "Sending..." : "Send Message"} <BsSend />
            </button>

            {/* Status Message Display */}
            {result && (
              <p className={result.includes("Successfully") ? styles.successMsg : styles.errorMsg}>
                {result}
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default ServiceContact;