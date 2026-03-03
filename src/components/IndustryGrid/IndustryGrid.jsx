/* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";
// import "./IndustyGrid.css"
// import {
//   FaShieldAlt,
//   FaUniversity,
//   FaTruck,
//   FaGamepad,
//   FaGraduationCap,
//   FaMoneyBill,
//   FaCapsules,
//   FaCube,
//   FaArrowRight,
// } from "react-icons/fa";


// const industries = [
//   { title: "Insurance", icon: FaShieldAlt },
//   { title: "Real Estate", icon: FaUniversity },
//   { title: "Transportation & Logistic", icon: FaTruck },
//   { title: "Media & Entertainment", icon: FaGamepad },
//   { title: "Education", icon: FaGraduationCap },
//   { title: "Finance", icon: FaMoneyBill },
//   { title: "Healthcare", icon: FaCapsules },
//   { title: "Manufacturing & Industrial", icon: FaCube },
// ];

// export default function IndustryGrid() {
//   return (
//     <div className="mt-5">
//     <div className="industry-wrapper container">
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="industry-title"
//       >
//     Driving Industry Transformation through <br />
// Innovative Solutions  and Unmatched Excellence.
//       </motion.h1>

//       <div className="industry-grid">
//         {industries.map((item, index) => {
//           const Icon = item.icon;

//           return (
//          <motion.div
//   key={index}
//   className="industry-card"
//   initial={{ opacity: 0, scale: 0.9 }}
//   animate={{ opacity: 1, scale: 1 }}
//   transition={{ delay: index * 0.1 }}
// >
//   <h3 className="card-title">{item.title}</h3>

//   <div className="icon-row small-desc">
//     <Icon className="main-icon" />
//   </div>

//   <div className="go-corner">
//     <div className="go-arrow">→</div>
//   </div>
// </motion.div>


//           );
//         })}
//       </div>
//     </div>
//   </div>
//   );

// }
import React from "react";
import { motion } from "framer-motion";
import styles from "./Industries.module.css";
import {
  FaShieldAlt,
  FaBuilding,
  FaTruck,
  FaGamepad,
  FaGraduationCap,
  FaMoneyBillWave,
  FaCapsules,
  FaBoxOpen
} from "react-icons/fa";

const industries = [
  { title: "Insurance", icon: <FaShieldAlt /> },
  { title: "Real Estate", icon: <FaBuilding /> },
  { title: "Transportation & Logistic", icon: <FaTruck /> },
  { title: "Media & Entertainment", icon: <FaGamepad /> },
  { title: "Education", icon: <FaGraduationCap /> },
  { title: "Finance", icon: <FaMoneyBillWave /> },
  { title: "Healthcare", icon: <FaCapsules /> },
  { title: "Manufacturing & Industrial", icon: <FaBoxOpen /> }
];

const IndustryGrid= () => {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <h2 className={styles.heading}>
          Driving Industry Transformation Through
          <span> Innovative Solutions</span>
        </h2>

        <div className={styles.grid}>
          {industries.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <div className={styles.overlay}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid;
