import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/compufytechnolab_white.png";
import styles from "./Navbar.module.css"; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesData = {
    "IT Services": ["Managed IT Services", "Co-Managed IT Services"],
    "CyberSecurity": ["Email Security & Phishing Protection", "Endpoint Detection and Response", "Risk Assessment & Gap Analysis"],
    "Cloud": ["Cloud Consulting", "Cloud Intelligence & Analytics", "Cloud Manage Services", "Cloud Infrastructure", "IoT Edge Integration", "Cloud Migration"],
    "DevOps": ["Containerization Orchestrations", "Site Reliability Engineering", "Serverless Application Deployment", "Infrastructure as Code", "DevOps Consulting"],
  "Database": ["Database Administration & Optimization", "Database Migration & Modernization", ]  };

  const toServicePath = (service) => service.toLowerCase().replace(/\s+/g, '-');

  return (
    <nav className={`${styles.vertexNavbar} fixed-top ${scrolled ? styles.navbarScrolled : ""}`}>
      <div className="container">
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link className={styles.logo} to="/">
            <img src={logo} alt="Compufy Technolab" />
          </Link>

         
          <button className={styles.menuBtn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? "☰" : "☰"}
          </button>

          <ul className={`${styles.navMenu} ${isMobileMenuOpen ? styles.active : ""}`}>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            </li>

            <li className={styles.navItem}>
              <div 
                className={styles.navLink} 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services <span className={styles.dropdownArrow}>+</span>
              </div>

              <div className={`${styles.megaMenu} ${mobileServicesOpen ? styles.showMobile : ""}`} 
                   style={{ display: (isMobileMenuOpen && !mobileServicesOpen) ? 'none' : '' }}>
                {Object.entries(servicesData).map(([category, items], index) => (
                  <div className={styles.serviceColumn} key={index}>
                    <h4 className={styles.categoryTitle}>{category}</h4>
                    {items.map((service, i) => (
                      <div className={styles.serviceItem} key={i}>
                        <Link 
                          to={`/services/${toServicePath(service)}`}
                          onClick={() => { setIsMobileMenuOpen(false); setMobileServicesOpen(false); }}
                        >
                          {service}
                        </Link>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </li>

            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </li>
            
            {/* Mobile Contact Button */}
            <li className="d-lg-none mt-3">
                <button className={styles.navBtnCustom}>Contact Us</button>
            </li>
          </ul>

          {/* Desktop Contact Button */}
          <button className={`${styles.navBtnCustom} d-none d-lg-block`}>
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;