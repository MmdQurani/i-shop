import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import { Scrollbar , Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'

function BannerSlider(prop) {
  
  return (
    <>
      <Swiper
        modules={[Scrollbar, Autoplay]}
        navigation={true}
        // autoplay={{
        //   delay: 4500, // فاصله بین اسلایدها به میلی‌ثانیه  
        //   disableOnInteraction: false, // متوقف نشود با تعاملات کاربر  
        // }}
        spaceBetween={0}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{ height: 'max-content' }}
        className='py-3'
      >

        {prop.items.map(item =>
          <SwiperSlide key={item.id} >
            <Link to='/shop'>
              <img className='trend-img-st' src={item.src} alt="" />
            </Link>
          </SwiperSlide>
        )}

      </Swiper>
    </>
  )
}

export default BannerSlider