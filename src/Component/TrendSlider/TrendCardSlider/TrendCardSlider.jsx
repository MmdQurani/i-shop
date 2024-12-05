import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay , EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

function TrendCardSlider() {
  return (
    <>
      <Swiper
        className='h-100'
        modules={[EffectCards , Scrollbar , Autoplay]}
        effect={'cards'}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 4500, // فاصله بین اسلایدها به میلی‌ثانیه  
          disableOnInteraction: false, // متوقف نشود با تعاملات کاربر  
        }}
      >
        <SwiperSlide className='bg-warning' style={{borderRadius:'1rem'}}>
          <img src="./public/assets/img/Trend/mob5-1.jpg" style={{ objectFit: 'cover', height: '100%', width: '100%' }} alt="" />
        </SwiperSlide>
        <SwiperSlide className='bg-warning' style={{borderRadius:'1rem'}}>
          <img src="./public/assets/img/Trend/mob2-1.jpg" style={{ objectFit: 'cover', height: '100%', width: '100%' }} alt="" />
        </SwiperSlide>
        <SwiperSlide className='bg-warning' style={{borderRadius:'1rem'}}>
          <img src="./public/assets/img/Trend/mob4-1.jpg" style={{ objectFit: 'cover', height: '100%', width: '100%' }} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default TrendCardSlider