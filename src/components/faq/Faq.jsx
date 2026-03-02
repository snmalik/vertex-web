import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";
import styles from './FAQ.module.css';
import dot from '../../assets/image/shape-21.svg'
import line from '../../assets/image/ab-shape1.svg'


  
 const faqData = [
  {
    id: 1,
    question: "What core IT services do you provide for modern enterprises?",
    answer: "We offer end-to-end IT solutions including Managed IT Support, Cybersecurity, Cloud Migration, DevOps automation, and Database Management. Our services are designed to reduce downtime, ensure compliance, and accelerate digital transformation through customized, future-ready IT ecosystems."
  },
  {
    id: 2,
    question: "How do your Managed IT Services ensure business continuity?",
    answer: "We ensure reliability through 24/7 proactive monitoring, automated patch management, and robust incident response. By identifying risks early and implementing real-time backups, we minimize operational disruptions and keep your systems stable and cost-efficient."
  },
  {
    id: 3,
    question: "How do you manage cloud migration without affecting data integrity?",
    answer: "Our migration starts with a deep infrastructure audit and a strategic roadmap. We use secure transfer protocols and staged deployments (phased migration) to ensure zero data loss and minimal downtime, followed by post-migration cost and performance optimization."
  },
  {
    id: 4,
    question: "Which DevOps practices do you use to speed up delivery?",
    answer: "We utilize CI/CD automation, Infrastructure as Code (IaC), Containerization (Docker/Kubernetes), and Site Reliability Engineering (SRE). These practices eliminate manual errors, bridge the gap between dev and ops teams, and ensure faster, more reliable software releases."
  },
  {
    id: 5,
    question: "How do your database services optimize performance and security?",
    answer: "We provide proactive tuning, indexing optimization, and 24/7 DBA support to ensure high availability. Security is maintained through regular audits, strict access controls, and automated backup management to protect against data breaches and loss."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        
        <div className={styles.leftSide}>
          <div className={styles.header}>
            <h4 className={styles.badge}>F.A.Q</h4>
            <h2 className={styles.title}>Got Questions? We've Got Answers!</h2>
            <div className={styles.blueLine}></div>
            <p className={styles.subtitle}>
              We understand you may have questions, and we're here to help. Our FAQ section 
              provides expert answers to common queries, ensuring you have all the information you need.
            </p>
          </div>

          <div className={styles.imageGrid}>
             <div className={`${styles.circleWrap} ${styles.c1}`}>
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200" alt="team" />
             </div>
             <div className={`${styles.circleWrap} ${styles.c2}`}>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400" alt="main" />
             </div>
             <div className={`${styles.circleWrap} ${styles.c3}`}>
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200" alt="work" />
             </div>
             <div className={`${styles.circleWrap} ${styles.c4}`}>
                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=100" alt="small" />
             </div>
          </div>
          <div className={styles.leftdot}>
            <img src={dot} alt="" />
            <img src={line} alt="" />
          </div>
          <div className={styles.rightdot}>
<img src={dot} alt="" />
          </div>
        </div>

      
        <div className={styles.rightSide}>
          <div className={styles.accordionContainer}>
            {faqData.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className={`${styles.accordionItem} ${isOpen ? styles.active : ''}`}>
                  <button 
                    className={styles.questionBtn}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    <span className={styles.questionText}>{item.question}</span>
                    <span className={styles.iconBox}>
                      {isOpen ? <HiMiniChevronUp /> : <HiMiniChevronDown />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.answerBox}
                      >
                        <p className={styles.answerText}>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          <div className={styles.rightdotfaqSection}>
            <img src={dot} alt="" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;