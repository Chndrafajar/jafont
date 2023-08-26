import React, { useRef, useState } from 'react';
import { LandingPage } from '../../data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../assets/swiper.css';

import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

import { NavLink } from 'react-router-dom';

const BlogsSlide = () => {
  return (
    <div className="blogsSlide">
      <div className="container">
        <h2>Blogs</h2>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          breakpoints={{
            0: {
              spaceBetween: 20,
              slidesPerView: 1,
            },
            768: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
            1251: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
          }}
          // scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          {LandingPage?.Blogs?.map((b) => (
            <SwiperSlide>
              <div className="column" key={b.id}>
                <div className="items">
                  <img src={b.img} alt="" />
                  <div className="info">
                    <h5>{b.title}</h5>
                    <p>{b.desc.substring(0, 68)}...</p>
                    <NavLink to="/blogs/oke" className="link">
                      <span>Read More</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogsSlide;
