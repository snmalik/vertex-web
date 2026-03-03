import React from "react";
import styles from "./Services.module.css";
import shape_service from "../../assets/image/h10-service-1.svg";
import database from '../../assets/image/database-icon.png';
import web from "../../assets/image/web-icon.png";
import devops from "../../assets/image/devops-icon.png";
import security from "../../assets/image/cyber-icon.png";

const services = [
  {
    title: "Enterprise Web Solutions",
    img: web,
    text: "Custom-built, scalable, and secure web applications designed for high-performance business operations."
  },
  {
    title: "Cybersecurity & Compliance",
    img: security,
    text: "Advanced threat protection and vulnerability management to secure your critical business data."
  },
  {
    title: "Cloud & Infrastructure",
    img: database,
    text: "Optimized database architecture and resilient cloud environments for maximum uptime and reliability."
  },
  {
    title: "DevOps & Automation",
    img: devops,
    text: "Accelerating deployment cycles and improving system stability through modern CI/CD automation."
  }
];

export default function Services() {
  return (
    <section className={styles.section}>
      {/* Subtitle: Context badal diya */}
      <p className={styles.subtitle}>Our Expertise</p>
      
      {/* Title: Zyada professional tone */}
      <h2 className={styles.title}>Scalable Technology Solutions</h2>

      {/* Description: "Engaging websites" ki jagah "Business Continuity" par focus */}
      <p className={styles.desc}>
        We provide enterprise-level IT services that ensure security, 
        scalability, and operational excellence for global businesses.
      </p>

      <div className={styles.grid}>
        {services.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.iconWrapper}>
              <img src={shape_service} className={styles.bgShape} alt="" />
              <div className={styles.img}>
                   <img src={item.img} alt={item.title} />
              </div>
            </div>

            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <button className={styles.btn}>Explore All Services</button>
    </section>
  );
}