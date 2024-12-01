import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import './TrendSlider.css'
import { Link } from 'react-router-dom';

function TrendSlider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        // slidesPerView={8}
        navigation
        loop={false}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{ height: '26rem' }}
        className='py-3'
      >

        <SwiperSlide style={{ height: '100%' }} >
          <Link to='/shop'>
            <img className='trend-img-st' src="./public/assets/img/Trend/newSlider2-1.jpg" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/shop'>
            <img className='trend-img-st' src="./public/assets/img/Trend/newSlider3-1.jpg" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/shop'>
            <img className='trend-img-st' src="./public/assets/img/Trend/newSlider4-1.jpg" alt="" />
          </Link>
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default TrendSlider