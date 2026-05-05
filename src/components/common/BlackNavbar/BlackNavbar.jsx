import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/image/compufytechnolab_white.png";
import styles from "./Navbar.module.css"; 
import { useSiteData } from "../../../context/SiteContext";

const Navbar = () => {
  const { siteData } = useSiteData();
  const navbar = siteData?.navbar || {};
  const menuItems = navbar.menuItems || [];
  const servicesData = navbar.servicesData || {};
  const ctaText = navbar.ctaText || "Contact Us";
  const ctaLink = navbar.ctaLink || "/contact";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toServicePath = (service) => service.toLowerCase().replace(/\s+/g, '-');

  return (
    <nav className={`${styles.vertexNavbar} fixed-top ${scrolled ? styles.navbarScrolled : ""}`}>
      <div className="container">
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link className={styles.logo} to="/">
            <img src={navbar.logoUrl || logo} alt="Vertex Pro Logo" />
          </Link>

          <button className={styles.menuBtn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            ☰
          </button>

          <ul className={`${styles.navMenu} ${isMobileMenuOpen ? styles.active : ""}`}>
            {menuItems.map((item, index) => {
              if (item.name.toLowerCase() === 'services') {
                return (
                  <li key={index} className={styles.navItem}>
                    <div 
                      className={styles.navLink} 
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      {item.name} <span className={styles.dropdownArrow}>+</span>
                    </div>

                    <div className={`${styles.megaMenu} ${mobileServicesOpen ? styles.showMobile : ""}`} 
                         style={{ display: (isMobileMenuOpen && !mobileServicesOpen) ? 'none' : '' }}>
                      {Object.entries(servicesData).map(([category, items], idx) => (
                        <div className={styles.serviceColumn} key={idx}>
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
                );
              }
              return (
                <li key={index} className={styles.navItem}>
                  <Link className={styles.navLink} to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
            
            {/* Mobile Contact Button */}
            <li className="d-lg-none mt-3">
                <button className={styles.navBtnCustom}> 
                  <Link to={ctaLink} onClick={() => setIsMobileMenuOpen(false)}>{ctaText}</Link> 
                </button>
            </li>
          </ul>

          {/* Desktop Contact Button */}
          <button className={`${styles.navBtnCustom} d-none d-lg-block`}>
           <Link style={{textDecoration:"none"}} to={ctaLink}>{ctaText}</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

