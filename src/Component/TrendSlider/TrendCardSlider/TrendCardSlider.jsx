import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import './TrendCardSlider.css'
import { Link } from 'react-router-dom';

function TrendCardSlider() {
  return (
    <>
      <Swiper
        className='h-100'
        modules={[EffectCreative, Scrollbar, Autoplay]}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        loop={true}
        autoplay={{
          delay: 4500, // فاصله بین اسلایدها به میلی‌ثانیه  
          disableOnInteraction: false, // متوقف نشود با تعاملات کاربر  
        }}
        dir='ltr'
      >
        <SwiperSlide className='bg-warning border-parent-trend-card-slider'>
          <Link to='/'>
            <img src="./public/assets/img/Trend/mob2-1.jpg" className='img-trend-card-slider' alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='bg-warning border-parent-trend-card-slider'>
          <Link to='/'>
            <img src="./public/assets/img/Trend/mob3-1.jpg" className='img-trend-card-slider' alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='bg-warning border-parent-trend-card-slider'>
          <Link to='/'>
            <img src="./public/assets/img/Trend/mob5-1.jpg" className='img-trend-card-slider' alt="" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default TrendCardSlider