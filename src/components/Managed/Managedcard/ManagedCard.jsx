import styles from "./Managed.module.css";

// React Icons Import
import { 
  BsCloudArrowUp,
  BsHddNetwork,
  BsDatabaseCheck,
  BsShieldLock,
  BsPatchCheck,
  BsGraphUpArrow
} from "react-icons/bs";

export default function ManagedCard() {

  const data = [
    {
      icon: <BsCloudArrowUp />,
      title: "Cloud-Based Backup Solutions",
      desc: "Mobility is essential for growth in any organization. This is why cloud prevents economies of scale and offers effective and efficient data backup and management solutions."
    },
    {
      icon: <BsHddNetwork />,
      title: "On-Premises Backup Solutions",
      desc: "Secure on-site backup systems for essential information with adjustable storage and encryption options for businesses desiring more management power."
    },
    {
      icon: <BsDatabaseCheck />,
      title: "Backup & Recovery for Databases",
      desc: "Services ensure minimum piece of service downtime and data loss designed for different kinds of database backup and recovery including scheduled online backups and transaction logging."
    },
    {
      icon: <BsShieldLock />,
      title: "Endpoint Protection & Backup",
      desc: "A good and comprehensive backup service solution extends to the endpoints, which are the workstations, laptops and even mobile phones of its users no matter where the users are."
    },
    {
      icon: <BsPatchCheck />,
      title: "Backup Testing & Validation",
      desc: "Backup data protection strategies also include substantial backup check and assurance services to protect the reliable backup data in case such a situation arises."
    },
    {
      icon: <BsGraphUpArrow />,
      title: "Business Continuity Solutions",
      desc: "Solutions for ensuring business continuity that include all stages from recovery management to disaster communications without taking operations offline."
    }
  ];

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>
        Focused On Your Business Powered By <br /> Our Technology
      </h2>

      <div className={styles.grid}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            
            <div className={styles.iconCircle}>
              {item.icon}
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

          </div>
        ))}
      </div>
    </section>
  );
}