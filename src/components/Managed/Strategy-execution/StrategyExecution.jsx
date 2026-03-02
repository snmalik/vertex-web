import React from 'react';
import styles from './StrategyExecution.module.css';

const processSteps = [
    {
        id: '01',
        title: 'Assessment & Planning',
        description: 'We solicit and evaluate critical information regarding your data and infrastructure, identify your recovery goals (RTO, RPO), and evaluate conceivable threats in order to prepare a relevant emergency plans.'
    },
    {
        id: '02',
        title: 'Backup Strategy Design',
        description: 'We design the actual backup strategies to fit your needs, determining the types and frequency of backups, their geographical location, and the means utilized to achieve continuity of business operations.'
    },
    {
        id: '03',
        title: 'Backup Implementation',
        description: 'Our experts incorporate the necessary backup systems into the company’s networks, setting up daily and/or weekly backups and ensuring physical security through data encryption.'
    },
    {
        id: '04',
        title: 'Continuous Monitoring & Management',
        description: 'The backup systems operate under our supervision, and any corrective measures are taken before the occurrence of a problem, leading to system downtime, through the use of alerts.'
    },
    {
        id: '05',
        title: 'Disaster Recovery Testing',
        description: 'Disaster recovery plan drills are carried out periodically, and the exercises include destruction of data and testing of recovery plans which includes adjustments as required.'
    },
    {
        id: '06',
        title: 'Recovery & Support',
        description: 'Disaster hits and we are in recovery mode at once, restoring all processes, databases, and systems to their performance before the incident with round the clock support for minimal operational breaks and business continuity.'
    }
];

const StrategyExecution = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>
                    Where Strategy Meets Execution That <br /> <span>Turning Vision Into Action</span>
                </h2>

                <div className={styles.timeline}>
                    {processSteps.map((step, index) => (
                        <div key={step.id} className={styles.timelineItem}>
                            {/* Line and Number Column */}
                            <div className={styles.indicatorCol}>
                                <div className={styles.numberBox}>
                                    <span className={styles.number}>{step.id}</span>
                                </div>
                                {index !== processSteps.length - 1 && <div className={styles.verticalLine}></div>}
                            </div>

                            {/* Content Column */}
                            <div className={styles.contentCol}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategyExecution;