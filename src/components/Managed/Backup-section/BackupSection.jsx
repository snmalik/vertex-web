import React, { useState, useEffect, useRef } from 'react';
import styles from './BackupSection.module.css';
// import { title } from 'framer-motion/client';

const stepsData = [
    {
        id: 1,
        title: 'PC Backup',
        description: 'Exercise measures to safeguard important info residing on desk tops with an automatic secure backup system that low restoration cost.',
    },
    {
        id: 2,
        title: 'Server Backup',
        description: 'Provide consistent interval backup to server data so as to reduce any potential losses and guarantee service delivery in the event of a breakdown.',
    },
    {
        id: 3,
        title: 'Cloud Backup',
        description: 'Use the internet to back up all the data as one of the solutions for storing information that is flexible, convenient and can be used under any risk.',
    },
    {
        id: 4,
        title: 'Database Backup',
        description: 'Ensure your SQL and NoSQL databases are backed up with point-in-time recovery options to prevent data loss.',
    },
    {
        id:5,
        title:'Business Continuity Consulting',
        description:'Providing expert consulting services on the formulation of mechanisms that will facilitate uninterrupted operations of your business amidst disruptions.',
    },
];

const BackupSection = () => {
    const [activeStep, setActiveStep] = useState(null);
    const cardRefs = useRef([]);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const observers = [];

        cardRefs.current.forEach((cardRef, index) => {
            if (cardRef) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setActiveStep(index);
                            }
                        });
                    },
                    {
                       
                        root: scrollContainerRef.current,
                        rootMargin: '0px',
                        threshold: 0.6, 
                    }
                );
                observer.observe(cardRef);
                observers.push(observer);
            }
        });

        return () => observers.forEach((observer) => observer.disconnect());
    }, []);

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>
                Reliable Backup, Seamless Recovery <br /> Anytime, Anywhere
            </h2>

            {/* Yeh main wrapper hai jiski height fixed hogi */}
            <div className={styles.scrollWrapper} ref={scrollContainerRef}>
                <div className={styles.stepsContainer}>
                    {stepsData.map((step, index) => (
                        <div
                            key={step.id}
                            className={`${styles.step} ${activeStep === index ? styles.active : ''}`}
                            onMouseEnter={() => setActiveStep(index)}
                        >
                            <div className={styles.numberContainer}>
                                <span className={styles.number}>{step.id}</span>
                            </div>
                            <div
                                className={styles.card}
                                ref={(el) => (cardRefs.current[index] = el)}
                            >
                                <h3 className={styles.cardTitle}>{step.title}</h3>
                                <p className={styles.cardDescription}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BackupSection;