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
            {/* Alt text ko thora aur behtar kiya */}
            <img src={logo} alt="Vertex Pro Enterprise IT Solutions Logo" />
          </div>

          <p>
            Vertex Pro is a global leader in Enterprise IT Infrastructure, 
            Cybersecurity, and Managed Tech Solutions, empowering organizations 
            with scalable and secure digital environments.
          </p>

          <div className={styles.socialIcons}>
            {/* HAR LINK PE aria-label ADD KIYA HAI - Isse Accessibility score barhega */}
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow Vertex Pro on Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow Vertex Pro on X (formerly Twitter)"
            >
              <FaXTwitter />
            </a>
            <a 
              href="https://www.facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow Vertex Pro on Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Core Services */}
        <div className={styles.footerCol}>
          <h3>Core Services</h3>
          <ul>
            <li><Link to="/services/cloud-consulting" className={styles.footerLink}>Cloud Solutions</Link></li>
            <li><Link to="/services/risk-assessment-&-gap-analysis" className={styles.footerLink}>Cybersecurity</Link></li>
            <li><Link to="/services/co-managed-it-services" className={styles.footerLink}>Managed IT</Link></li>
            <li><Link to="/services/devops-consulting" className={styles.footerLink}>DevOps</Link></li>
            <li><Link to="/contact" className={styles.footerLink}>IT Assessment</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className={styles.footerCol}>
          <h3>Company</h3>
          <ul>
            <li><Link to="/about" className={styles.footerLink}>About Us</Link></li>
            <li><Link to="/case-studies" className={styles.footerLink}>Case Studies</Link></li>
            <li><Link to="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link></li>
            <li><Link to="/terms" className={styles.footerLink}>Terms & Conditions</Link></li>
            <li><Link to="/contact" className={styles.footerLink}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className={styles.footerCol + " " + styles.contactCol}>
          <h3>Global Contact</h3>

          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} aria-hidden="true" />
            <a href="mailto:info@vertexpro.net" className={styles.footerLink}>info@vertexpro.net</a>
          </div>

          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.contactIcon} aria-hidden="true" />
            <a href="tel:+19292072406" className={styles.footerLink}>(+1) 929-207-2406</a>
          </div>

          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} aria-hidden="true" />
            <span>
              13 N, Gurumangat Road,
              Gulberg II, Lahore, PK 54000
            </span>
          </div>
          
          <div className={styles.contactItem}>
             <FaGlobe className={styles.contactIcon} aria-hidden="true" />
             <span className={styles.footerLink}>Global Remote Support 24/7</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <p>Copyright © 2026 Vertex Pro. All Rights Reserved.</p>
        <div className={styles.bottomLinks}>
          <Link to="" className={styles.footerLink}>Security Policy</Link>
          <Link to="" className={styles.footerLink}>Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}