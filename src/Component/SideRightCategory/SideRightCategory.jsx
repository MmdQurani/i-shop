import React from 'react'
import './SideRightCategory.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";

// import "./styles.css";

function SideRightCategory(prop) {
  return (
    <div className='w-100'>
      <>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3500, // فاصله بین اسلایدها به میلی‌ثانیه  
            disableOnInteraction: false, // متوقف نشود با تعاملات کاربر  
          }}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            100: {
              slidesPerView: 1, // یک اسلاید برای صفحه نمایش کوچک  
            }
          }}
          className="py-2 px-3"
          >

          {prop.children}
        </Swiper>
      </>
      
    </div>
  )
}

export default SideRightCategory