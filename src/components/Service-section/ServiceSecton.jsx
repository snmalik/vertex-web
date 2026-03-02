import React from "react";
import styles from "./Services.module.css";
import shape_service from "../../assets/image/h10-service-1.svg"
import database from '../../assets/image/database-icon.png'
import web from "../../assets/image/web-icon.png"
import devops from "../../assets/image/devops-icon.png"
import security from "../../assets/image/cyber-icon.png"

const services = [
  {
    title: "Website Design & Development",
    img:  web,
    text: "We create responsive, fast, and user-friendly websites tailored to your business needs."
  },
  {
    title: "Cybersecurity",
     img:  security,
    text: "Protecting systems and data from cyber threats with advanced security solutions."
  },
  {
    title: "DevOps",
      img:  devops,
    text: "Automating workflows and improving collaboration and deployment speed."
  },
  {
    title: "Database & Cloud",
    img: database,
    text: "Secure database architecture and scalable cloud infrastructure solutions."
  }
];

export default function Services() {
  return (
    <section className={styles.section}>

      <p className={styles.subtitle}>Our Services</p>
      <h2 className={styles.title}>Service We Provide</h2>

      <p className={styles.desc}>
        From designing engaging websites to boosting your online presence,
        we craft solutions that drive real results and lasting impact.
      </p>

      <div className={styles.grid}>
        {services.map((item, index) => (
          <div className={styles.card} key={index}>

            <div className={styles.iconWrapper}>
              <img src={shape_service} className={styles.bgShape}  alt="" />
              <div className={styles.img}>
                   <img src={item.img} alt={item.title} />
              </div>
            </div>

            <h3>{item.title}</h3>
            <p>{item.text}</p>

          </div>
        ))}
      </div>

      <button className={styles.btn}>View Details</button>

    </section>
  );
}
