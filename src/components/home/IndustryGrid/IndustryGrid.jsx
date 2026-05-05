import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUp } from "react-bootstrap-icons";
import { resolveIcon } from "../../../utils/iconResolver";
import styles from "./Industries.module.css";

const IndustryGrid = ({
  title = "Our Specialized",
  accentTitle = "Solutions",
  industries = []
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (industries.length === 0) return null;

  const visibleIndustries = isExpanded ? industries : industries.slice(0, 4);

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {title}
          <span> {accentTitle}</span>
        </motion.h2>

        <div className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {visibleIndustries.map((item, index) => {
              const renderedIcon = resolveIcon(item.iconName) || resolveIcon('BsBoxSeam');
              return (
                <motion.div
                  key={item.title + index}
                  className={styles.card}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.5, delay: isExpanded ? 0 : index * 0.1 }}
                  whileHover={{ y: -10 }}
                  layout
                >
                  <div className={styles.icon}>{renderedIcon}</div>
                  <h3>{item.title}</h3>
                  <div className={styles.overlay}></div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {industries.length > 4 && (
          <div className="text-center mt-5">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                marginTop: '50px',
                padding: '14px 40px',
                borderRadius: '40px',
                border: '2px solid #6669F1',
                background: 'transparent',
                color: '#6669F1',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: '0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#6669F1';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#6669F1';
              }}
            >
              {isExpanded ? (
                <>Show Less <ArrowUp size={20} /></>
              ) : (
                <>View All Solutions <ArrowRight size={20} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustryGrid;


