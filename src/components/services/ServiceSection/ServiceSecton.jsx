import React, { useState } from "react";
import styles from "./Services.module.css";
import shape_service from "../../../assets/image/h10-service-1.svg";

export default function Services({ 
  subtitle = "Our Expertise",
  title = "Scalable Technology Solutions",
  description = "We provide enterprise-level IT services...",
  services = []
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Use dynamic services if available, otherwise original fallback
  const allServices = services && services.length > 0
    ? services
    : [
      { title: "Enterprise Web Solutions", img: "", text: "Custom-built, scalable, and secure web applications..." },
      { title: "Cybersecurity & Compliance", img: "", text: "Advanced threat protection..." },
      { title: "Cloud & Infrastructure", img: "", text: "Optimized database architecture..." },
      { title: "DevOps & Automation", img: "", text: "Accelerating deployment cycles..." }
    ];

  // Logic: Show top 3 if not expanded, all if expanded
  const itemsToShow = isExpanded ? allServices : allServices.slice(0, 3);

  return (
    <section className={styles.section}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{description}</p>

      <div className={styles.grid}>
        {itemsToShow.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.iconWrapper}>
                <img src={shape_service} className={styles.bgShape} alt="" />
                <div className={styles.img}>
                  {item.img ? (
                    <img src={item.img} alt={item.title} />
                  ) : (
                    <div className="w-100 h-100 d-flex align-items-center justify-content-center text-white-50" style={{ fontSize: '20px' }}>⚡</div>
                  )}
                </div>
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>

      {allServices.length > 3 && (
        <button
          className={styles.btn}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Explore All Services"}
        </button>
      )}
    </section>
  );
}

