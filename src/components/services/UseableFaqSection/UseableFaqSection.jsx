import React, { useEffect, useState } from 'react';
import styles from './UseableFaq.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; 

const FaqSection = ({ faqTitle, faqs }) => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (

    <div data-aos="fade-up" data-aos-duration="1000">
      <section className={styles.faqWrapper}>
        <div className={styles.container}>
          <h2 className={styles.title}>{faqTitle}</h2>
          
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              >
                <div className={styles.questionRow} onClick={() => toggleFaq(index)}>
                  <h3>{faq.question}</h3>
                  <span className={styles.icon}>
                    {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>
                
                
                <div className={styles.answerWrapper}>
                  <div className={styles.answerContent}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
