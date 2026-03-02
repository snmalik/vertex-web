import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/compufytechnolab_white.png";
import styles from "./Footer.module.css"; 
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        {/* Left Section */}
        <div className={styles.footerCol + " " + styles.logoCol}>
          <div className={styles.logo}>
            <img src={logo} alt="Vertex Pro Logo" />
          </div>

          <p>
            Vertex Pro is one of Pakistan's rapidly growing digital marketing
            company, helping brands succeed in the ever-evolving online
            landscape.
          </p>

          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          </div>
        </div>

        {/* Useful Links 1 */}
        <div className={styles.footerCol}>
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/" className={styles.footerLink}>Home</Link></li>
            <li><Link to="/about" className={styles.footerLink}>About Us</Link></li>
            <li><Link to="/services" className={styles.footerLink}>Services</Link></li>
            <li><Link to="/blog" className={styles.footerLink}>Blog</Link></li>
            <li><Link to="/contact" className={styles.footerLink}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Useful Links 2 */}
        <div className={styles.footerCol}>
          <h3>More Links</h3>
          <ul>
            <li><Link to="/faq" className={styles.footerLink}>FAQ</Link></li>
            <li><Link to="/portfolio" className={styles.footerLink}>Portfolio</Link></li>
            <li><Link to="/testimonial" className={styles.footerLink}>Testimonial</Link></li>
            <li><Link to="/privacy" className={styles.footerLink}>Privacy Policy</Link></li>
            <li><Link to="/terms" className={styles.footerLink}>Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className={styles.footerCol + " " + styles.contactCol}>
          <h3>Contact Us</h3>

          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <a href="mailto:info@vertexpro.net" className={styles.footerLink}>info@vertexpro.net</a>
          </div>

          <div className={styles.contactItem}>
            <FaGlobe className={styles.contactIcon} />
            <a href="https://www.vertexpro.net" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>www.vertexpro.net</a>
          </div>

          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <span>
              13 N, Gurumangat Road,
              Industrial Area Gulberg II,
              Lahore, Pakistan 54000
            </span>
          </div>

          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.contactIcon} />
            <a href="tel:+19292072406" className={styles.footerLink}>(+1) 9292072406</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <p>Copyright © 2025 Vertex Pro. All Rights Reserved.</p>
        <div className={styles.bottomLinks}>
          <Link to="/privacy" className={styles.footerLink}>Privacy Policy</Link>
          <Link to="/faq" className={styles.footerLink}>FAQ</Link>
        </div>
      </div>
    </footer>
  );
}
