// import React from 'react';
// import { motion } from 'framer-motion';
// import styles from './Migration.module.css';
// import { BsCheckCircleFill, BsCpu, BsDatabaseFillLock, BsCloudCheckFill, BsSearch } from 'react-icons/bs';

// const steps = [
//   { 
//     title: "Phase 01: Audit", 
//     subtitle: "Discovery & Readiness", 
//     icon: <BsSearch />,
//     details: "Deep-dive into legacy dependencies, application mapping, and TCO (Total Cost of Ownership) analysis."
//   },
//   { 
//     title: "Phase 02: Design", 
//     subtitle: "Cloud Landing Zone", 
//     icon: <BsCpu />, 
//     details: "Architecting VPCs, IAM roles, and network security groups to create a secure enterprise landing zone."
//   },
//   { 
//     title: "Phase 03: Migration", 
//     subtitle: "Data & App Transfer", 
//     icon: <BsDatabaseFillLock />, 
//     details: "Executing the move using block-level replication or database migration services (DMS) for zero data loss."
//   },
//   { 
//     title: "Phase 04: Validation", 
//     subtitle: "Testing & UAT", 
//     icon: <BsCheckCircleFill />, 
//     details: "Rigorous load testing and User Acceptance Testing (UAT) to ensure performance benchmarks are met."
//   },
//   { 
//     title: "Phase 05: Hypercare", 
//     subtitle: "Go-Live & Support", 
//     icon: <BsCloudCheckFill />, 
//     details: "24/7 post-migration monitoring and continuous performance tuning for the newly migrated workload."
//   }
// ];

// const MigrationFlow = () => {
//   return (
//     <section className={styles.wrapper}>
//       <div className={styles.container}>
//         <h2 className={styles.heading}>Our Enterprise Migration Framework</h2>
//         <div className={styles.flowLine}>
//           {steps.map((step, index) => (
//             <motion.div 
//               key={index}
//               className={styles.stepItem}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//             >
//               <div className={styles.iconContainer}>
//                 {step.icon}
//                 <div className={styles.connector}></div>
//               </div>
//               <div className={styles.textContainer}>
//                 <span className={styles.phaseTag}>{step.title}</span>
//                 <h3>{step.subtitle}</h3>
//                 <p>{step.details}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MigrationFlow;

import React from 'react';
import styles from './Migration.module.css';

const MigrationFlow = ({ heading, challenges }) => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <h2 className={styles.mainHeading} dangerouslySetInnerHTML={{ __html: heading }} />
        
        <div className={styles.grid}>
          {challenges.map((item, index) => (
            <div 
              key={index} 
              className={styles.challengeCard}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
             
              <span className={styles.watermark}>0{index + 1}</span>
              
              <div className={styles.iconBox}>{item.icon}</div>
              
              <div className={styles.cardContent}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MigrationFlow;
