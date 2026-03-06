import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./TrustBar.module.css";
import logo_1 from '../../assets/image/slider-1.png'
import logo_2 from '../../assets/image/slider-2.png'
import logo_3 from '../../assets/image/slider-3.png'
import logo_4 from '../../assets/image/slider-4.png'
import logo_5 from '../../assets/image/slider-5.png'
import logo_6 from '../../assets/image/slider-6.png'
import logo_7 from '../../assets/image/slider-7.png'
import logo_8 from '../../assets/image/slider-8.png'


const partnerLogos = [
  { name: "AWS", url: logo_1 },
  { name: "Azure", url: logo_2  },
  { name: "Google Cloud", url : logo_3 },
  { name: "Cisco", url: logo_4 },
  { name: "Cloudflare", url: logo_5 },
  { name: "Docker", url: logo_6  },
  { name: "Kubernetes", url: logo_7 },
  { name: "Fortinet", url: logo_8 },
];

const TrustBar = () => {
  return (
    <section className={styles.trustSection}>
      <div className="container">
        <p className={styles.tagline}>Global Partners & Certifications</p>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          speed={3000} // Slow and smooth movement
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Hover karne par slider rukh jayega
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className={styles.logoSlider}
        >
          {partnerLogos.map((logo, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.logoWrapper}>
                <img src={logo.url} alt={logo.name} className={styles.logoImg} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrustBar;