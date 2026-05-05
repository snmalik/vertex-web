import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./TrustBar.module.css";

const TrustBar = ({ 
  tagline = "Global Partners & Certifications", 
  partners = [] 
}) => {
  // Fallback to empty if no partners provided
  const partnersToRender = partners && partners.length > 0 ? partners : [];

  if (partnersToRender.length === 0) return null;

  return (
    <section className={styles.trustSection}>
      <div className="container">
        <p className={styles.tagline}>{tagline}</p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          loop={partnersToRender.length >= 3}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: Math.min(3, partnersToRender.length) },
            1024: { slidesPerView: Math.min(5, partnersToRender.length) },
          }}
          className={styles.logoSlider}
        >
          {partnersToRender.map((logo, index) => {
            if (!logo.url) return null;

            return (
              <SwiperSlide key={index} className={styles.slide}>
                <div className={styles.logoWrapper}>
                  <img src={logo.url} alt={logo.name || `Partner ${index + 1}`} className={styles.logoImg} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TrustBar;
