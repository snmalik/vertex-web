import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import styles from './TestimonialsSection.module.css';
import shape_1 from "../../../assets/image/shape-4.svg";
import shape_2 from "../../../assets/image/shape-4.svg";
import shape_3 from "../../../assets/image/shape-7.svg";

const testimonials = [
  { id: 1, name: "Erika Wagner", role: "UX Designer", review: "Many desktop publishing web page editors now use Lorem Ipsum...", img: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "James Smith", role: "Product Manager", review: "Many desktop publishing web page editors now use Lorem Ipsum...", img: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Sarah Khan", role: "DevOps Lead", review: "Many desktop publishing web page editors now use Lorem Ipsum...", img: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "John Doe", role: "CEO", review: "Many desktop publishing web page editors now use Lorem Ipsum...", img: "https://i.pravatar.cc/150?img=4" }
];

const extendedTestimonials = [...testimonials, ...testimonials.slice(0, 3)];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);
  const slideCount = testimonials.length;

  // Screen width ke hisab se movement calculate karne ka function
  const getMovePercentage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 600) return 100; // Mobile: 100% move
      if (window.innerWidth <= 992) return 50;  // Tablet: 50% move
      return 45; // Desktop: 45% move
    }
    return 45;
  };

  useEffect(() => {
    const startSlider = () => {
      timeoutRef.current = setInterval(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 4000);
    };
    startSlider();
    return () => clearInterval(timeoutRef.current);
  }, []);

  useEffect(() => {
    if (currentIndex === slideCount) {
      setTimeout(() => {
        setIsTransitioning(false); 
        setCurrentIndex(0); 
      }, 500); 
    }
    if (currentIndex === 0) {
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [currentIndex, slideCount]);

  return (
    <section className={styles.container}>
      <div className={styles.dotGridTop}></div>
      <div className={styles.curveBottom}></div>

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <span className={styles.subTitle}>Testimonials</span>
            <h2 className={styles.mainTitle}>Hear from Our <br /> <span>Happy Clients</span></h2>
          </div>
          <p className={styles.headerDesc}>
            From startups to enterprises, we’ve helped brands grow. These are our customers' opinions.
          </p>
        </div>

        <div className={styles.sliderWindow}>
          <div 
            className={styles.sliderTrack}
            style={{ 
              transform: `translateX(-${currentIndex * getMovePercentage()}%)`, 
              transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
            }}
          >
            {extendedTestimonials.map((item, index) => (
              <div key={`${item.id}-${index}`} className={styles.slideCard}>
                <div className={styles.cardInner}>
                  <div className={styles.cardHeader}>
                    <div className={styles.userProfile}>
                      <div className={styles.imageCircle}>
                        <img src={item.img} alt={item.name} />
                      </div>
                      <div className={styles.userInfo}>
                        <h4 className={styles.userName}>{item.name}</h4>
                        <p className={styles.userRole}>{item.role}</p>
                      </div>
                    </div>
                    <div className={styles.stars}>
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <FaQuoteRight className={styles.quoteIcon} />
                    <h5 className={styles.reviewLabel}>Customers Review</h5>
                    <p className={styles.reviewText}>{item.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.navigation}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.navDot} ${currentIndex % slideCount === index ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative Shapes */}
      <div className={styles.shapeone}><img src={shape_1} alt="" /></div>
      <div className={styles.shapetwo}><img src={shape_2} alt="" /></div>
      <div className={styles.shapethree}><img src={shape_3} alt="" /></div>
    </section>
  );
};

export default TestimonialSection;