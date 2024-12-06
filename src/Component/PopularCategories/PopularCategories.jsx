import React from 'react'
import './PopularCategories.css'
import HeadSection from '../HeadSection/HeadSection'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

function PopularCategories() {
  return (
    <div>
      <HeadSection moreItems={true} title={`دسته بندی های محبوب`} link='/' />

      <div className='parent-swiper-box'>
        <div className='bg-danger h-100 mx-swiper-box'>
          <Swiper
            slidesPerView={9}
            modules={[Navigation]}
            navigation={{
              nextEl:'.swiper-next-button',
              prevEl:'.swiper-prev-button'
            }}
            style={{height:'10rem' , overflow:'hidden'}}
          >

            <SwiperSlide className='bg-warning h-100'>
              <img src="./public/assets/img/Trend/mob4-1.jpg" style={{objectFit:'cover' , width:'100%'}} alt="" />
            </SwiperSlide>
            <SwiperSlide className='bg-warning h-100'>slide 2</SwiperSlide>
            <SwiperSlide className='bg-warning h-100'>slide 3</SwiperSlide>
            <SwiperSlide className='bg-warning h-100'>slide 4</SwiperSlide>
            <SwiperSlide className='bg-warning h-100'>slide 5</SwiperSlide>
            <SwiperSlide className='bg-warning h-100'>slide 6</SwiperSlide>
            <SwiperSlide className='bg-warning h-100'>slide 7</SwiperSlide>
            <SwiperSlide className='bg-warning h-100'>slide 8</SwiperSlide>
            <SwiperSlide className='bg-warning h-100'>slide 9</SwiperSlide>
            <SwiperSlide className='bg-warning h-100'>slide 10</SwiperSlide>
            <SwiperSlide className='bg-warning h-100'>slide 11</SwiperSlide>
            <SwiperSlide className='bg-warning h-100'>slide 12</SwiperSlide>
          </Swiper>
        </div>
        <div dir='rtl' className='navigation-btn-st d-flex flex-row justify-content-between'>
          <button className='swiper-next-button'>next</button>
          <button className='swiper-prev-button'>prev</button>
        </div>
      </div>
    </div>
  )
}

export default PopularCategories