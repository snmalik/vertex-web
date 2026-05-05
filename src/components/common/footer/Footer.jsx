import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/image/compufytechnolab_white.png";
import styles from "./Footer.module.css"; 
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useSiteData } from "../../../context/SiteContext";

export default function Footer() {
  const { siteData } = useSiteData();
  const footer = siteData.footer || {};
  const socials = footer.socials || {};


  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        {/* Left Section - Positioning Update */}
        <div className={styles.footerCol + " " + styles.logoCol}>
          <div className={styles.logo}>
            <img src={siteData?.navbar?.logoUrl || logo} alt="Vertex Pro Logo" />
          </div>

          <p>
            {footer.description}
          </p>

          <div className={styles.socialIcons}>
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href={socials.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          </div>
        </div>

        {/* Useful Links 1 */}
        {/* Core Services Links */}
        <div className={styles.footerCol}>
          <h3>{footer.coreServices?.heading || "Core Services"}</h3>
          <ul>
            {(footer.coreServices?.links || []).map((link, idx) => (
              <li key={idx}><Link to={link.path} className={styles.footerLink}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div className={styles.footerCol}>
          <h3>{footer.company?.heading || "Company"}</h3>
          <ul>
            {(footer.company?.links || []).map((link, idx) => (
              <li key={idx}><Link to={link.path} className={styles.footerLink}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact Us - Global Focus */}
        <div className={styles.footerCol + " " + styles.contactCol}>
          <h3>Global Contact</h3>

          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <a href={`mailto:${footer.email}`} className={styles.footerLink}>{footer.email}</a>
          </div>

          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.contactIcon} />
            <a href={`tel:${footer.phone}`} className={styles.footerLink}>{footer.phone}</a>
          </div>

          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <span style={{ whiteSpace: 'pre-line' }}>
              {footer.address}
            </span>
          </div>
          
          <div className={styles.contactItem}>
             <FaGlobe className={styles.contactIcon} />
             <span className={styles.footerLink}>Global Remote Support 24/7</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <p>{footer.copyrightText || "Copyright © 2026 Vertex Pro. All Rights Reserved."}</p>
        <div className={styles.bottomLinks}>
          {(footer.bottomLinks || []).map((link, idx) => (
            <Link key={idx} to={link.path} className={styles.footerLink}>{link.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

