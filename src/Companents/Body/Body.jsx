
import React from 'react';
import './Body.css';
import Card from '../Card/Card'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import products from '../products';

const Body = () => {

  return (
    <div className="body" id='navbar_a'>  
      <div className="container">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className='body-swiper'>
            <Link to={`/detail/${product.id}`}>
            <Card data={product} />
            
            </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Body;
