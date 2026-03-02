
import React from 'react';
import styles from './Average.module.css';
// Importing suitable icons from react-icons/bi (BoxIcons collection)
import { 
    BiShieldQuarter, 
    BiTimeFive, 
    BiSupport, 
    BiData, 
    BiTask, 
    BiLineChart 
} from 'react-icons/bi';

// Data for the features section
const featuresData = [
    {
        id: 1,
        icon: <BiShieldQuarter />,
        title: 'Comprehensive Data Protection',
        description: 'We provide complete disaster recovery services ensuring that your information is secured, stored and can be retrieved whenever there is any calamity.',
    },
    {
        id: 2,
        icon: <BiTimeFive />,
        title: 'Fast Recovery Time',
        description: 'You will experience little or no downtime and business operations will resume almost immediately after a disaster due to our state of the art recovery measures and equipment.',
    },
    {
        id: 3,
        icon: <BiSupport />,
        title: '24/7 Support & Recovery Assistance',
        description: 'Our qualified support staff works twenty four hours all days including holidays in providing recovery help so that operations can continue even after a catastrophe occurs.',
    },
    {
        id: 4,
        icon: <BiData />,
        title: 'Automated Backups',
        description: 'We have automated backups which lessens the possibility of making mistakes and makes sure that the data is up to date and ready to be recovered at any time.',
    },
    {
        id: 5,
        icon: <BiTask />,
        title: 'End-to-End Testing',
        description: 'The emphasis is on testing activities related to the DR plan regularly, making sure your company\'s recovery operations will work as intended when needed.',
    },
    {
        id: 6,
        icon: <BiLineChart />,
        title: 'Continuous Monitoring & Alerts',
        description: 'This service involves continuous surveillance of your backup systems in order to see that all is well and also gives warning signals so that your business is not affected.',
    },
];

const AdvantagesSection = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>
                    Transforming Your Challenges Into <br /> Competitive Advantages
                </h2>
                <div className={styles.gridContainer}>
                    {featuresData.map((feature) => (
                        <div key={feature.id} className={styles.featureCard}>
                            <div className={styles.iconContainer}>
                                {feature.icon}
                            </div>
                            <div className={styles.textContainer}>
                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                                <p className={styles.cardDescription}>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;