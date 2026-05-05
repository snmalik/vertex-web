import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";
import styles from './FAQ.module.css';
import dot from '../../../assets/image/shape-21.svg'
import line from '../../../assets/image/ab-shape1.svg'



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

const FAQ = ({ data }) => {
  const [openId, setOpenId] = useState(1);

  // Fallback to static data if no dynamic data is passed
  const badge = data?.badge || "F.A.Q";
  const title = data?.title || "Got Questions? We've Got Answers!";
  const subtitle = data?.subtitle || "We understand you may have questions, and we're here to help. Our FAQ section provides expert answers to common queries, ensuring you have all the information you need.";
  const questions = data?.questions || faqData;
  const cloudImages = data?.images || [];

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>

        <div className={styles.leftSide}>
          <div className={styles.header}>
            <h4 className={styles.badge}>{badge}</h4>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.blueLine}></div>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>

          <div className={styles.imageGrid}>
            <div className={`${styles.circleWrap} ${styles.c1}`}>
              {cloudImages[0]?.url ? (
                <img src={cloudImages[0].url} alt="team" />
              ) : (
                <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center text-primary fw-bold">V</div>
              )}
            </div>
            <div className={`${styles.circleWrap} ${styles.c2}`}>
              {cloudImages[1]?.url ? (
                <img src={cloudImages[1].url} alt="main" />
              ) : (
                <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center text-primary fw-bold" style={{ fontSize: '2rem' }}>V</div>
              )}
            </div>
            <div className={`${styles.circleWrap} ${styles.c3}`}>
              {cloudImages[2]?.url ? (
                <img src={cloudImages[2].url} alt="work" />
              ) : (
                <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center text-primary fw-bold">V</div>
              )}
            </div>
            <div className={`${styles.circleWrap} ${styles.c4}`}>
              {cloudImages[3]?.url ? (
                <img src={cloudImages[3].url} alt="small" />
              ) : (
                <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center text-primary fw-bold opacity-50 small">V</div>
              )}
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
            {questions.map((item) => {
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

