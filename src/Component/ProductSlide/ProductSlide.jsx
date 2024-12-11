import React from 'react'
import HeadSection from '../HeadSection/HeadSection'
import NavigationBtnCard from '../NavigationBtnCard/NavigationBtnCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import './ProductSlide.css'
import 'swiper/css';
import BannerNewProduct from './BannerNewProduct/BannerNewProduct'

function ProductSlide(prop) {
  return (

    <>
      <div>
        <HeadSection moreItems={true} link='/' title={prop.HeadSection} />

        <div className='parent-swiper-box'>
          <div className='h-100 mx-swiper-box'>
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '#NewProducts-next',
                prevEl: '#NewProducts-prev'
              }}
              spaceBetween={20}
              loop={true}
              breakpoints={{
                100: {
                  slidesPerView: 1, // یک اسلاید برای صفحه نمایش کوچک  
                },
                440: {
                  slidesPerView: 1.2, // یک اسلاید برای صفحه نمایش کوچک  
                },
                520: {
                  slidesPerView: 1.5, // یک اسلاید برای صفحه نمایش کوچک  
                },
                800: {
                  slidesPerView: 1.8, // یک اسلاید برای صفحه نمایش کوچک  
                },
                992: {
                  slidesPerView: 2.7, // سه اسلاید برای صفحه نمایش بزرگ  
                },
                1024: {
                  slidesPerView: 2.7, // سه اسلاید برای صفحه نمایش بزرگ  
                },
                1200: {
                  slidesPerView: 3, // سه اسلاید برای صفحه نمایش بزرگ  
                },
                1400: {
                  slidesPerView: 3.7, // سه اسلاید برای صفحه نمایش بزرگ  
                },
                1700: {
                  slidesPerView: 4, // سه اسلاید برای صفحه نمایش بزرگ  
                }
              }}
              style={{ height: '25rem', overflow: 'hidden' }}
              className='px-2'
            >

              {prop.children}

            </Swiper>
          </div>

          <NavigationBtnCard prev='NewProducts-prev' next='NewProducts-next' />

        </div>

        {prop.HeadSection == 'محصولات جدید' &&

          <BannerNewProduct />
        }
      </div>
    </>
  )
}

export default ProductSlide