// import React from 'react';
// import styles from './ChallengeGrid.module.css';

// const ChallengeGrid = ({ heading, challenges }) => {
//   return (
//     <section className={styles.sectionWrapper}>
//       <div className={styles.container}>
//         <h2 className={styles.mainHeading} dangerouslySetInnerHTML={{ __html: heading }} />
        
//         <div className={styles.grid}>
//           {challenges.map((item, index) => (
//             <div 
//               key={index} 
//               className={styles.challengeCard}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
             
//               <span className={styles.watermark}>0{index + 1}</span>
              
//               <div className={styles.iconBox}>{item.icon}</div>
              
//               <div className={styles.cardContent}>
//                 <h3>{item.title}</h3>
//                 <p>{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ChallengeGrid;
import React from 'react';
import styles from './ChallengeGrid.module.css';

const ChallengeGrid = ({ heading, challenges }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
      
        
        <div className={styles.listContainer}>
              <h2 className={styles.mainHeading} dangerouslySetInnerHTML={{ __html: heading }} />
          {challenges.map((item, index) => (
            <div 
              key={index} 
              className={styles.challengeRow}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className={styles.numberSide}>
                <span className={styles.rowNumber}>0{index + 1}</span>
                <div className={styles.iconCircle}>{item.icon}</div>
              </div>
              
              <div className={styles.contentSide}>
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

export default ChallengeGrid;
