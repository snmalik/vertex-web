import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import styles from './TestimonialsSection.module.css';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
  const reviews = [
    { id: 1, name: "Erika Wagner", role: "Chief lil UX Designer", img: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Erika Wagner", role: "Chief lil UX Designer", img: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Erika Wagner", role: "Chief lil UX Designer", img: "https://i.pravatar.cc/150?u=3" },
    { id: 4, name: "Erika Wagner", role: "Chief lil UX Designer", img: "https://i.pravatar.cc/150?u=4" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.headerContainer}>
        <div>
          <h4 className={styles.titleSub}>Testimonials</h4>
          <h2 className={styles.titleMain}>Hear from Our <br /> Happy Clients</h2>
        </div>
        <div className={styles.description}>
          From startups to enterprises, we’ve helped brands grow. These are our customers' opinions of our services.
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
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div>
                    <h3 className={styles.name}>{item.name}</h3>
                    <p className={styles.role}>{item.role}</p>
                  </div>
                  <div className={styles.stars}>★★★★★</div>
                </div>

                <h4 className={styles.reviewTitle}>Customers Review</h4>
                <p className={styles.reviewText}>
                  Many desktop publishing web page editors now use Lorem Ipsum as 
                  their default model text, and a search for 'lorem ipsum' will uncover 
                  many web sites still in
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