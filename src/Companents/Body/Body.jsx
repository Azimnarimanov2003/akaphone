
import React from 'react';
import './Body.css';
import Card from '../Card/Card'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import products from '../products';
import useShareStore from '../Store/Store';

const Body = () => {

    const { cards, setCards } = useShareStore();

  const handleAdd = (item) => {
    setCards([...cards, item]);
  };

  return (
    <div className="body" id='navbar_a'>  
      <div className="container">
        <div className="body-box">
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
            <button className="card-button" onClick={() => handleAdd(product)}>Enter</button>
            </SwiperSlide>
          ))} 
        </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Body;
