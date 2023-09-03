import React, { useEffect, useState } from 'react';
import { Produk } from '../../data';

import { NavLink } from 'react-router-dom';
import { BiSolidStar } from 'react-icons/bi';
import { FaCartArrowDown } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../assets/swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

//react placeholder
import ContentLoader, { List, BulletList, Instagram, Code } from 'react-content-loader';

const PopularFonts = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="Popular ">
      <div className="container ">
        <div className="row">
          <div className="title">
            <h2>Popular Fonts</h2>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            568: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1200: {
              spaceBetween: 25,
              slidesPerView: 4,
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
          {Produk?.Fonts?.map((f) => (
            <SwiperSlide>
              <div className="card-popular" key={f.id}>
                <div className="itemsProfil">
                  <img src={f.img} alt="" />
                  <img src={f.imgToko} alt="" className="profil" />
                  <div className="harga">
                    <h5>${f.price}</h5>
                  </div>
                </div>
                <div className="card-body">
                  <div className="name">
                    <h5> {f.name.substring(0, 30)}...</h5>
                  </div>
                  <span className="by">
                    by <b>{f.nameToko}</b> in <b>{f.categories}</b>
                  </span>
                  <div className="info">
                    <div className="infoItems">
                      <div className="items">
                        {!isNaN(f.totalStars / f.starNumber) && (
                          <>
                            <div className="stars">
                              {Array(Math.round(f.totalStars / f.starNumber))
                                .fill()
                                .map((item, i) => (
                                  <BiSolidStar />
                                ))}
                            </div>

                            <h6>({Math.round(f.totalStars / f.starNumber)})</h6>
                          </>
                        )}
                      </div>

                      <div className="sales">
                        <span>{f.sales} sales</span>
                      </div>
                    </div>
                    <div className="btnDemo">
                      <NavLink to="/detail/123" className="link">
                        <button>
                          <FaCartArrowDown />
                        </button>
                      </NavLink>
                    </div>
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

export default PopularFonts;
