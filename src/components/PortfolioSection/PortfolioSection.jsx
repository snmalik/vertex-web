
 import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Portfolio.module.css';
import img_1 from "../../assets/image/cloud.jpg"
import img_2 from "../../assets/image/cyberSecurity.jpg"
import img_3 from "../../assets/image/database.jpg"
import img_4 from "../../assets/image/devops.jpg"


const portfolioData = [
  { id: 1, category: "Cloud", title: "Cloud Infrastructure", subtitle:"Cloud Infrastructure",img:img_1 },
  { id: 2, category: "Web Design", title: "Web Development", subtitle: "Innovating solutions", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500" },
  { id: 3, category: "DevOps", title: "DevOps Automation", subtitle: "DevOps Automation", img: img_4  },
  { id: 4, category: "Database", title: "Database Analytics", subtitle: "Database Analytics", img: img_3 },
  { id: 5, category: "CyberSecurity", title: "CyberSecurity", subtitle: "Creative Design", img: img_2 },
];

const categories = ["All", "Web Design", "Cloud", "DevOps","Database","CyberSecurity"];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = activeTab === "All" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeTab);

  return (
    <section className={styles.portfolioSection}>
      <div className={styles.container}>
        
        {/* Header & Tabs Container */}
        <div className={styles.headerRow}>
          <div className={styles.titles}>
            <h4 className={styles.subTitle}>Portfolio</h4>
            <h2 className={styles.mainTitle}>See How We Bring Ideas to Life</h2>
            <div className={styles.underline}></div>
          </div>

          {/* Nav Tabs */}
          <nav className={styles.navTabs}>
            {categories.map((cat) => (
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

        {/* Portfolio Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={styles.portfolioCard}
              >
                <div className={styles.imageWrapper}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;