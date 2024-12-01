import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './Storys.css'
import 'swiper/css';

function Storys() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        // slidesPerView={8}
        navigation
        loop={false}
        breakpoints={{
          320: {
            slidesPerView: 3, // یک اسلاید برای صفحه نمایش کوچک  
          },
          400: {
            slidesPerView: 4, // یک اسلاید برای صفحه نمایش کوچک  
          },
          // تنظیمات برای صفحه نمایش کوچک  
          640: {
            slidesPerView: 5, // یک اسلاید برای صفحه نمایش کوچک  
          },
          // تنظیمات برای صفحه نمایش متوسط  
          768: {
            slidesPerView: 6, // دو اسلاید برای صفحه نمایش متوسط  
          },
          // تنظیمات برای صفحه نمایش بزرگ  
          1024: {
            slidesPerView: 8, // سه اسلاید برای صفحه نمایش بزرگ  
          },
          1400: {
            slidesPerView: 12, // سه اسلاید برای صفحه نمایش بزرگ  
          },
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className='justify-content-center d-flex flex-column align-items-center row-gap-2'>
          <button className='parent-profile-story'>
            <img src="./public/assets/img/Storys/story-01.jpg" className='profile-story' alt="" />
          </button>
          <span>hello</span>
        </SwiperSlide>
        <SwiperSlide className='justify-content-center d-flex flex-column align-items-center row-gap-2'>
          <button className='parent-profile-story'>
            <img src="./public/assets/img/Storys/story-01.jpg" className='profile-story' alt="" />
          </button>
          <span>hello</span>
        </SwiperSlide>
        <SwiperSlide className='justify-content-center d-flex flex-column align-items-center row-gap-2'>
          <button className='parent-profile-story'>
            <img src="./public/assets/img/Storys/story-01.jpg" className='profile-story' alt="" />
          </button>
          <span>hello</span>
        </SwiperSlide>
        <SwiperSlide className='justify-content-center d-flex flex-column align-items-center row-gap-2'>
          <button className='parent-profile-story'>
            <img src="./public/assets/img/Storys/story-01.jpg" className='profile-story' alt="" />
          </button>
          <span>hello</span>
        </SwiperSlide>

        <SwiperSlide className='justify-content-center d-flex flex-column align-items-center row-gap-2'>
          <button className='parent-profile-story'>
            <img src="./public/assets/img/Storys/story-01.jpg" className='profile-story' alt="" />
          </button>
          <span>hello</span>
        </SwiperSlide>
        <SwiperSlide className='justify-content-center d-flex flex-column align-items-center row-gap-2'>
          <button className='parent-profile-story'>
            <img src="./public/assets/img/Storys/story-01.jpg" className='profile-story' alt="" />
          </button>
          <span>hello</span>
        </SwiperSlide>
        <SwiperSlide className='justify-content-center d-flex flex-column align-items-center row-gap-2'>
          <button className='parent-profile-story'>
            <img src="./public/assets/img/Storys/story-01.jpg" className='profile-story' alt="" />
          </button>
          <span>hello</span>
        </SwiperSlide>
        <SwiperSlide className='justify-content-center d-flex flex-column align-items-center row-gap-2'>
          <button className='parent-profile-story'>
            <img src="./public/assets/img/Storys/story-01.jpg" className='profile-story' alt="" />
          </button>
          <span>hello</span>
        </SwiperSlide>
        <SwiperSlide className='justify-content-center d-flex flex-column align-items-center row-gap-2'>
          <button className='parent-profile-story'>
            <img src="./public/assets/img/Storys/story-01.jpg" className='profile-story' alt="" />
          </button>
          <span>hello</span>
        </SwiperSlide>
        <SwiperSlide className='justify-content-center d-flex flex-column align-items-center row-gap-2'>
          <button className='parent-profile-story'>
            <img src="./public/assets/img/Storys/story-01.jpg" className='profile-story' alt="" />
          </button>
          <span>hello</span>
        </SwiperSlide>
        <SwiperSlide className='justify-content-center d-flex flex-column align-items-center row-gap-2'>
          <button className='parent-profile-story'>
            <img src="./public/assets/img/Storys/story-01.jpg" className='profile-story' alt="" />
          </button>
          <span>hello</span>
        </SwiperSlide>
        <SwiperSlide className='justify-content-center d-flex flex-column align-items-center row-gap-2'>
          <button className='parent-profile-story'>
            <img src="./public/assets/img/Storys/story-01.jpg" className='profile-story' alt="" />
          </button>
          <span>hello</span>
        </SwiperSlide>
        <SwiperSlide className='justify-content-center d-flex flex-column align-items-center row-gap-2'>
          <button className='parent-profile-story'>
            <img src="./public/assets/img/Storys/story-01.jpg" className='profile-story' alt="" />
          </button>
          <span>hello</span>
        </SwiperSlide>
        <SwiperSlide className='justify-content-center d-flex flex-column align-items-center row-gap-2'>
          <button className='parent-profile-story'>
            <img src="./public/assets/img/Storys/story-01.jpg" className='profile-story' alt="" />
          </button>
          <span>hello</span>
        </SwiperSlide>
        <SwiperSlide className='justify-content-center d-flex flex-column align-items-center row-gap-2'>
          <button className='parent-profile-story'>
            <img src="./public/assets/img/Storys/story-01.jpg" className='profile-story' alt="" />
          </button>
          <span>hello</span>
        </SwiperSlide>
        <SwiperSlide className='justify-content-center d-flex flex-column align-items-center row-gap-2'>
          <button className='parent-profile-story'>
            <img src="./public/assets/img/Storys/story-01.jpg" className='profile-story' alt="" />
          </button>
          <span>hello</span>
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default Storys