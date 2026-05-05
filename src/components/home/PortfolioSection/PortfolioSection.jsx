import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Portfolio.module.css';

const Portfolio = ({ subtitle, title, categories, items }) => {
  const [activeTab, setActiveTab] = useState("All");

  const allProjects = items || [];
  const configuredCategories = categories || [];

  // Use configured categories from admin, with "All" at the start
  const dynamicCategories = ["All", ...configuredCategories];

  const filteredItems = activeTab === "All"
    ? allProjects
    : allProjects.filter(item => item.category === activeTab);

  if (allProjects.length === 0) return null;

  return (
    <section className={styles.portfolioSection}>
      <div className={styles.container}>

        {/* Header & Tabs Container */}
        <div className={styles.headerRow}>
          <div className={styles.titles}>
            <h4 className={styles.subTitle}>{subtitle || "Portfolio"}</h4>
            <h2 className={styles.mainTitle}>{title || "See How We Bring Ideas to Life"}</h2>
            <div className={styles.underline}></div>
          </div>

          {/* Nav Tabs */}
          <nav className={styles.navTabs}>
            {dynamicCategories.map((cat) => (
              <button
                key={cat}
                className={`${styles.tabBtn} ${activeTab === cat ? styles.active : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => {
              return (
                <motion.div
                  layout
                  key={item.id + item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={styles.portfolioCard}
                >
                  <div className={styles.imageWrapper}>
                    {item.img ? (
                      <img src={item.img} alt={item.title} />
                    ) : (
                      <div className="w-100 h-100 bg-dark d-flex align-items-center justify-content-center text-white-50 small">
                        No Image Uploaded
                      </div>
                    )}
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;
