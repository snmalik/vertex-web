import React, { useEffect } from "react";
import styles from "./ReuseCard.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ReuseCard({ items, heading }) {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <section className={styles.wrapper}>
      {/* Heading upar se niche aaye gi */}

      <h2
        className={styles.heading} data-aos="fade-down"
        dangerouslySetInnerHTML={{ __html: heading }}
      />

      <div className={styles.grid}>
        {items.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            // Cards aik aik karke aayenge (Staggered effect)
            data-aos="fade-up"
            data-aos-delay={index * 100} // Har card mein 100ms ka gap
            data-aos-duration="800"
          >
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
