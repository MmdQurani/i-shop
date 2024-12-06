import React from 'react'
import './PopularCategories.css'
import HeadSection from '../HeadSection/HeadSection'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function PopularCategories() {
  return (
    <div>
      <HeadSection moreItems={true} title={`دسته بندی های محبوب`} link='/' />

      <div className='parent-swiper-box'>
        <div className='h-100 mx-swiper-box'>
          <Swiper
            slidesPerView={9}
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-next-button',
              prevEl: '.swiper-prev-button'
            }}
            spaceBetween={15}
            breakpoints={{
              100: {
                slidesPerView: 2, // یک اسلاید برای صفحه نمایش کوچک  
              },
              410: {
                slidesPerView: 2, // یک اسلاید برای صفحه نمایش کوچک  
              },
              550: {
                slidesPerView: 3, // یک اسلاید برای صفحه نمایش کوچک  
              },
              992: {
                slidesPerView: 6, // سه اسلاید برای صفحه نمایش بزرگ  
              },
              1400: {
                slidesPerView: 9, // سه اسلاید برای صفحه نمایش بزرگ  
              }
            }}
            style={{ height: '10rem', overflow: 'hidden' }}
          >

            <SwiperSlide className='bg-warning h-100'>
              <div className='w-100 h-100 bg-danger'>
                <img src="assets/img/Trend/mob4-1.jpg" style={{ objectFit: 'cover', width: '100%' }} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className='bg-warning rounded-3 h-100'>slide 2</SwiperSlide>
            <SwiperSlide className='bg-warning rounded-3 h-100'>slide 3</SwiperSlide>
            <SwiperSlide className='bg-warning rounded-3 h-100'>slide 4</SwiperSlide>
            <SwiperSlide className='bg-warning rounded-3 h-100'>slide 5</SwiperSlide>
            <SwiperSlide className='bg-warning rounded-3 h-100'>slide 6</SwiperSlide>
            <SwiperSlide className='bg-warning rounded-3 h-100'>slide 7</SwiperSlide>
            <SwiperSlide className='bg-warning rounded-3 h-100'>slide 8</SwiperSlide>
            <SwiperSlide className='bg-warning rounded-3 h-100'>slide 9</SwiperSlide>
            <SwiperSlide className='bg-warning rounded-3 h-100'>slide 10</SwiperSlide>
            <SwiperSlide className='bg-warning rounded-3 h-100'>slide 11</SwiperSlide>
            <SwiperSlide className='bg-warning rounded-3 h-100'>slide 12</SwiperSlide>
          </Swiper>
        </div>
        <div dir='rtl' className='navigation-btn-st d-md-flex d-none flex-row justify-content-between'>
          <button className='swiper-next-button'>
            <FaChevronRight className='icon-swiper' />
          </button>
          <button className='swiper-prev-button'>
            <FaChevronLeft className='icon-swiper' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopularCategories