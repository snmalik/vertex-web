import React, { useState } from 'react';
import styles from './Faq.module.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const faqData = [
    {
        id: '01',
        question: 'How do you implement a Disaster Recovery Plan?',
        answer: 'A Disaster Recovery Plan (DRP), as the name suggests, is a plan that represents all of the processes as well as the tools and human resources needed to restore the IT infrastructure and information (this includes RTO, RPO, responsibilities, procedures, and communications).'
    },
    {
        id: '02',
        question: 'How frequently do you need to back data up?',
        answer: 'The frequency of backups depends on your RPO (Recovery Point Objective). For critical systems, we recommend real-time or hourly backups, while for less critical data, daily backups might suffice.'
    },
    {
        id: '03',
        question: 'Can disaster recovery be added to the current IT infrastructure?',
        answer: 'Yes, our solutions are designed to integrate seamlessly with your existing infrastructure, whether it is on-premise, cloud-based, or a hybrid setup.'
    },
    {
        id: '04',
        question: 'When recovery automation is used, what problem is minimized in Disaster Recovery?',
        answer: 'Automation significantly reduces human error and drastically cuts down the RTO (Recovery Time Objective), ensuring your business is back online in minutes rather than hours.'
    },
    {
        id: '05',
        question: 'How often should DR plans be evaluated?',
        answer: 'We recommend evaluating and testing your DR plan at least quarterly or whenever there is a significant change in your IT environment or business processes.'
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Pehla FAQ by default khula rahega

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>FAQs</h2>
                
                <div className={styles.accordion}>
                    {faqData.map((item, index) => (
                        <div key={item.id} className={styles.faqItem}>
                            <div 
                                className={styles.questionRow} 
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className={styles.questionText}>
                                    <span className={styles.id}>{item.id}.</span> {item.question}
                                </span>
                                <span className={styles.icon}>
                                    {activeIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                </span>
                            </div>

                            <div className={`${styles.answerWrapper} ${activeIndex === index ? styles.open : ''}`}>
                                <div className={styles.answerContent}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;