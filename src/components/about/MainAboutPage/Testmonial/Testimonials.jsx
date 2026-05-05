import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import styles from './TestimonialsSection.module.css';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { useSiteData } from '../../../../context/SiteContext';

const TestimonialsSection = ({ subTitle, title, description, reviews: propReviews }) => {
  const { siteData } = useSiteData();
  const reviews = propReviews || siteData?.testimonials?.reviews || [];

  return (
    <section className={styles.section}>
      <div className={styles.headerContainer}>
        <div>
          <h4 className={styles.titleSub}>{subTitle || 'Testimonials'}</h4>
          <h2 className={styles.titleMain} dangerouslySetInnerHTML={{ __html: title || 'Hear from Our <br /> Happy Clients' }} />
        </div>
        <div className={styles.description}>
          {description || "From startups to enterprises, we’ve helped brands grow. These are our customers' opinions of our services."}
        </div>
      </div>

      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.card}>
                <div className={styles.quoteIcon}>“</div>
                
                <div className={styles.profileArea}>
                  <div className={styles.imgWrapper}>
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.name} />
                    ) : (
                      <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center text-primary fw-bold">
                        {item.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className={styles.name}>{item.name}</h3>
                    <p className={styles.role}>{item.role}</p>
                  </div>
                  <div className={styles.stars}>
                    {'★'.repeat(item.stars || 5)}
                    {'☆'.repeat(5 - (item.stars || 5))}
                  </div>
                </div>

                <h4 className={styles.reviewTitle}>{item.cardTitle || 'Customers Review'}</h4>
                <p className={styles.reviewText}>
                  {item.reviewText}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;

