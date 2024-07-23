import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import watch from '../../Images/smart.png'
import './Header.css';

// SwiperCore.use([Autoplay, Pagination, Navigation]);

const Header = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-right">
          <li className="header-item">
            <h3 className="header-title">
              Смартфоны и гаджеты для близких и друзей по доступной цене
            </h3>
            <p className="header-text">
              В нашем магазине вы сможете найти качественную продукцию по доступным ценам для вашего близкого человека
            </p>
            <button className="header-btn">Посмотреть каталог</button>
          </li>
        </div>
        <div className="header-left">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>   <img src={watch} alt="watch" className="header-watch" /></SwiperSlide>
            <SwiperSlide><img src={watch} alt="watch" className="header-watch" /></SwiperSlide>
            <SwiperSlide><img src={watch} alt="watch" className="header-watch" /></SwiperSlide>
            <SwiperSlide><img src={watch} alt="watch" className="header-watch" /></SwiperSlide>
            <SwiperSlide><img src={watch} alt="watch" className="header-watch" /></SwiperSlide>
            <SwiperSlide><img src={watch} alt="watch" className="header-watch" /></SwiperSlide>
            <SwiperSlide><img src={watch} alt="watch" className="header-watch" /></SwiperSlide>
            <SwiperSlide><img src={watch} alt="watch" className="header-watch" /></SwiperSlide>
            <SwiperSlide><img src={watch} alt="watch" className="header-watch" /></SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Header;
