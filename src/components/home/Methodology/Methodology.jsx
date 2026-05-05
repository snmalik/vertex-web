import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Methodology.module.css";
import { ArrowRight, ArrowUp } from "react-bootstrap-icons";

const Methodology = ({
  subtitle = "Execution Framework",
  title = "How We Deliver Results",
  steps = []
}) => {
  const [showAll, setShowAll] = useState(false);

  if (steps.length === 0) return null;

  const visibleSteps = showAll ? steps : steps.slice(0, 3);

  return (
    <section className={styles.processSection}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <span className={styles.subtitle}>{subtitle}</span>
          <h2 className={styles.title}>{title}</h2>
        </motion.div>

        <div className={styles.processGrid}>
          <AnimatePresence mode="popLayout">
            {visibleSteps.map((step, index) => (
              <motion.div
                key={`${step.title}-${index}`}
                className={styles.stepCard}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, delay: showAll ? 0 : index * 0.1 }}
                layout
              >
                <h3>{step.title}</h3>
                <p>{step.text}</p>

                <div style={{
                  marginTop: '25px',
                  width: '40px',
                  height: '2px',
                  background: '#5e5ef0'
                }}></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {steps.length > 3 && (
          <div className="text-center mt-5">
            <button
              onClick={() => setShowAll(!showAll)}
              className={styles.btn}
            >
              {showAll ? (
                <>Show Less <ArrowUp size={18} /></>
              ) : (
                <>Explore All Phases <ArrowRight size={18} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Methodology;
