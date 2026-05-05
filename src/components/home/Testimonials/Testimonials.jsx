import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './TestimonialS.css';

const TestimonialSlider = ({ subTitle, title, description, reviews = [] }) => {
  if (reviews.length === 0) return null;

  return (
    <section className="testimonial-container">
      <div className="header-flex">
        <div className="title-section">
          <h4>{subTitle || 'Testimonials'}</h4>
          <h2 className='test-heading' dangerouslySetInnerHTML={{ __html: title || 'What Our Customers Say About Us' }} />
          <div className="blue-underline"></div>
        </div>
        <p className="header-desc">
          {description || "Feedback from our clients, discover how we've made a difference for growing businesses."}
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.75 },
        }}
        className="mySwiper"
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonial-card">
              <div className="user-meta">
                <div className="user-img-wrapper" style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.name} className="user-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center text-primary fw-bold">
                      {item.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="info">
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
                <div className="stars">
                  {'★'.repeat(item.stars || 5)}
                  {'☆'.repeat(5 - (item.stars || 5))}
                </div>
              </div>
              <div className="review-text">
                <h4>{item.cardTitle || 'Customers Review'}</h4>
                <p>{item.reviewText}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
