// import React from 'react';
// import { Container, Row, Col } from "react-bootstrap";
// import { motion } from "framer-motion";
// import styles from "./AboutUs.module.css";


// import imgMain from "../../assets/image/about-main.png";
// import img1 from "../../assets/image/about-1.png";
// import img2 from "../../assets/image/about-2.png";
// import img3 from "../../assets/image/about-3.png";
// import lineShape from "../../assets/image/ab-shape1.svg";
// import circle from '../../assets/image/shape-10.svg'
// import shape from '../../assets/image/shape-9.svg'

// const AboutSection = () => {
 
//   const scaleEffect = {
//     animate: {
//       scale: [1, 1.05, 1],
//     },
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   };

//   return (
//     <section className={styles.aboutSection}>
//       <Container>
//         <Row className="align-items-center">
          
        
//           <Col lg={6} className="position-relative">
//             <div className={styles.imageGridWrapper}>
              
            
//               <div className={styles.dotPattern}></div>

            
//               <motion.div 
//                 className={styles.mainCircle}
//                 {...scaleEffect}
//               >
//                 <img src={imgMain} alt="Team Meeting" />
//               </motion.div>

             
//               <motion.div 
//                 className={`${styles.subCircle} ${styles.imgTop}`}
//                 animate={{ scale: [1, 1.08, 1], y: [0, -10, 0] }}
//                 transition={{ duration: 5, repeat: Infinity }}
//               >
//                 <img src={img1} alt="Discussion" />
//               </motion.div>

      
//               <motion.div 
//                 className={`${styles.subCircle} ${styles.imgBottom}`}
//                 animate={{ scale: [1, 1.06, 1], x: [0, 10, 0] }}
//                 transition={{ duration: 6, repeat: Infinity }}
//               >
//                 <img src={img2} alt="Workplace" />
//               </motion.div>

//               <motion.div 
//                 className={`${styles.subCircle} ${styles.imgSmall}`}
//                 {...scaleEffect}
//               >
//                 <img src={img3} alt="Team" />
//               </motion.div>

//               <div className={styles.floatingTag}>
//                          <svg viewBox="0 0 100 100" className={styles.rotatingText}>
//                             <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
//                             <text>
//                               <textPath xlinkHref="#circlePath">
//                                 Creative Minds • Creative Minds •
//                               </textPath>
//                             </text>
//                          </svg>
//                          <div className={styles.tagDot}></div>
//                       </div>

            
//               <div className={styles.lineShape}>
//                 <img src={lineShape} alt="" />
//               </div>
//               <div className={styles.circleShape}>
//             <img src={circle} alt="" />
//               </div>
//             </div>
//           </Col>

       
//           <Col lg={6} className="ps-lg-5 mt-5 mt-lg-0 position-relative">
//             <motion.span 
//               className={styles.subHeading}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//             >
//               About Us
//             </motion.span>
            
//             <h2 className={styles.mainHeading}>
//               Making Your Business <br /> More Unique
//             </h2>

//             <div className={styles.divider}></div>

//             <div className={styles.description}>
//               <p>
//                 Our approach is simple: SEO, content marketing, and web development
//                 should work together for maximum impact as a digital marketing agency.
//               </p>
//               <p>
//                 We focus on data-driven solutions to improve search rankings, enhance user
//                 experience, and generate high-quality leads.
//               </p>
//             </div>

//             <motion.button 
//               className={styles.readMoreBtn}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Read More
//             </motion.button>
//             <div className={styles.bitDot}>
//               <img src={shape } alt="" />
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default AboutSection;

import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./AboutUs.module.css";

// Yahan humne props pass kar diye taake har page se alag data aaye
const AboutSection = ({ 
  subTitle, 
  title, 
  desc1, 
  desc2,
  desc3,
  mainImg, 
  img1, 
  img2, 
  img3, 
  lineShape, 
  circleShape, 
  bitDotShape 
}) => {
  
  const scaleEffect = {
    animate: { scale: [1, 1.05, 1] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <section className={styles.aboutSection}>
      <Container>
        <Row className="align-items-center">
          
          
          <Col lg={6} className="position-relative">
            <div className={styles.imageGridWrapper}>
              <div className={styles.dotPattern}></div>

              <motion.div className={styles.mainCircle} {...scaleEffect}>
                <img src={mainImg} alt="Main" />
              </motion.div>

              <motion.div 
                className={`${styles.subCircle} ${styles.imgTop}`}
                animate={{ scale: [1, 1.08, 1], y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <img src={img1} alt="Sub 1" />
              </motion.div>

              <motion.div 
                className={`${styles.subCircle} ${styles.imgBottom}`}
                animate={{ scale: [1, 1.06, 1], x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <img src={img2} alt="Sub 2" />
              </motion.div>

              <motion.div className={`${styles.subCircle} ${styles.imgSmall}`} {...scaleEffect}>
                <img src={img3} alt="Sub 3" />
              </motion.div>

              <div className={styles.floatingTag}>
                 <svg viewBox="0 0 100 100" className={styles.rotatingText}>
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text>
                      <textPath xlinkHref="#circlePath">Creative Minds • Creative Minds •</textPath>
                    </text>
                 </svg>
                 <div className={styles.tagDot}></div>
              </div>

              <div className={styles.lineShape}><img src={lineShape} alt="" /></div>
              <div className={styles.circleShape}><img src={circleShape} alt="" /></div>
            </div>
          </Col>

      
          <Col lg={6} className="ps-lg-5 mt-5 mt-lg-0 position-relative">
            <motion.span className={styles.subHeading} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              {subTitle}
            </motion.span>
            
        <h2
  className={styles.mainHeading}
  dangerouslySetInnerHTML={{ __html: title }}
></h2>
            <div className={styles.divider}></div>

            <div className={styles.description}>
              <p>{desc1}</p>
              <p>{desc2}</p>
              <p>{desc3}</p>
            </div>

            <motion.button className={styles.readMoreBtn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Read More
            </motion.button>

            <div className={styles.bitDot}>
              <img src={bitDotShape} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;