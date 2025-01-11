import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import './Storys.css'
import 'swiper/css';

function Storys() {

  const [imgUrl, setImgUrl] = useState(
    [
      {id:1 , src: 'assets/img/Storys/story-01.jpg' },
      {id:2 , src: 'assets/img/Storys/story-01.jpg' },
      {id:3 , src: 'assets/img/Storys/story-01.jpg' },
      {id:4 , src: 'assets/img/Storys/story-01.jpg' },
      {id:5 , src: 'assets/img/Storys/story-01.jpg' },
      {id:6 , src: 'assets/img/Storys/story-01.jpg' },
      {id:7 , src: 'assets/img/Storys/story-01.jpg' },
      {id:8 , src: 'assets/img/Storys/story-01.jpg' },
      {id:9 , src: 'assets/img/Storys/story-01.jpg' },
      {id:10 , src: 'assets/img/Storys/story-01.jpg' },
      {id:11 , src: 'assets/img/Storys/story-01.jpg' },
      {id:12 , src: 'assets/img/Storys/story-01.jpg' },
      {id:13 , src: 'assets/img/Storys/story-01.jpg' },
      {id:14 , src: 'assets/img/Storys/story-01.jpg' },
      {id:15 , src: 'assets/img/Storys/story-01.jpg' },
      {id:16, src: 'assets/img/Storys/story-01.jpg' },
      {id:17 , src: 'assets/img/Storys/story-01.jpg' },
    ]
  )

  useEffect(() => {

  }, [])

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        autoplay={{
          delay: 4500, // فاصله بین اسلایدها به میلی‌ثانیه  
          disableOnInteraction: false, // متوقف نشود با تعاملات کاربر  
        }}
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
          1600: {
            slidesPerView: 14, // سه اسلاید برای صفحه نمایش بزرگ  
          },
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >

        {imgUrl.map(item =>
          <SwiperSlide key={item.id} className='justify-content-center bg-main d-flex flex-column align-items-center row-gap-2'>
            <button className='parent-profile-story'>
              <img src={`${item.src}`} className='profile-story' alt="" />
            </button>
            <span>hello</span>
          </SwiperSlide>
        )}

      </Swiper>
    </>
  )
}

export default Storys