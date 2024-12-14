import React from 'react'
import HeadSection from '../HeadSection/HeadSection'
import NavigationBtnCard from '../NavigationBtnCard/NavigationBtnCard'
import { Swiper } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import './ProductSlide.css'
import 'swiper/css';
import BannerNewProduct from './BannerNewProduct/BannerNewProduct'

function ProductSlide(prop) {
  return (

    <>
      <div>
        <HeadSection moreItems={prop.moreItems} link='/' title={prop.HeadSection} />

        {prop.HeadSection == 'موبایل' || prop.HeadSection == 'لپ تاپ' ? // اسلاید اختصاصی برای محصولاتی که بنرهای ویژه داره

          <div className='w-100 h-100 d-flex flex-row justify-content-between align-items-center'>
            <div className='parent-swiper-box-two'>
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
                      slidesPerView: 2.3, // سه اسلاید برای صفحه نمایش بزرگ  
                    },
                    1400: {
                      slidesPerView: 2.6, // سه اسلاید برای صفحه نمایش بزرگ  
                    },
                    1700: {
                      slidesPerView: 3, // سه اسلاید برای صفحه نمایش بزرگ  
                    },
                  }}
                  style={{ height: '27rem', overflow: 'hidden' }}
                  className='px-2'
                >

                  {prop.children}

                </Swiper>
              </div>

              <NavigationBtnCard prev='NewProducts-prev' next='NewProducts-next' />

            </div>

            <div className='box-banner-product-slide-two'>
              <img src={prop.src} className='img-banner-product-slide-two' alt="" />
            </div>

          </div>

          : prop.Amazing == true ?
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
                  style={{ height: '27rem', overflow: 'hidden' , borderRadius:'1rem' }}
                  className='px-3 bg-btn'
                >

                  {prop.children}

                </Swiper>
              </div>

              {/* دکمه های اسلایدرهای صفحه */}
              <NavigationBtnCard prev='NewProducts-prev' next='NewProducts-next' />

            </div>

            :

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
                  style={{ height: '27rem', overflow: 'hidden' }}
                  className='px-2'
                >

                  {prop.children}

                </Swiper>
              </div>

              {/* دکمه های اسلایدرهای صفحه */}
              <NavigationBtnCard prev='NewProducts-prev' next='NewProducts-next' />

            </div>

        }

        {prop.HeadSection == 'محصولات جدید' && // بنرهای منحصر به فرد صفحه

          <BannerNewProduct />
        }
      </div>

    </>
  )
}

export default ProductSlide