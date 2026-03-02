import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

import './TestimonialS.css';

const TestimonialSlider = () => {
  const testimonials = [
    { id: 1, name: "Erika Wagner", role: "Chief lil UX Designer", img: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Erika Wagner", role: "Chief lil UX Designer", img: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Erika Wagner", role: "Chief lil UX Designer", img: "https://i.pravatar.cc/150?u=3" },
    { id: 4, name: "Erika Wagner", role: "Chief lil UX Designer", img: "https://i.pravatar.cc/150?u=4" },
  ];

  return (
    <section className="testimonial-container">
      <div className="header-flex">
        <div className="title-section">
          <h4 >Testimonials</h4>
          <h2 className='test-heading'>What Our Customers Say About Us</h2>
          <div className="blue-underline"></div>
        </div>
        <p className="header-desc">
          Feedback from our clients, discover how we've made a difference for growing businesses.
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
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonial-card">
              <div className="user-meta">
                <img src={item.img} alt={item.name} className="user-img" />
                <div className="info">
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
                <div className="stars">★★★★★</div>
              </div>
              <div className="review-text">
                <h4>Customers Review</h4>
                <p>
                  Many desktop publishing web page editors now use Lorem Ipsum as 
                  their default model text, and a search for 'lorem ipsum' will uncover 
                  many web sites still in.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;