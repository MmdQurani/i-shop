import React from 'react'
import HeadSection from '../HeadSection/HeadSection'
import NavigationBtnCard from '../NavigationBtnCard/NavigationBtnCard'
import { Swiper } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules';
import './ProductSlide.css'
import 'swiper/css';
import BannerNewProduct from './BannerNewProduct/BannerNewProduct'
import { Link } from 'react-router-dom';

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
                  modules={[Navigation, Autoplay]}
                  navigation={{
                    nextEl: '#NewProducts-next',
                    prevEl: '#NewProducts-prev'
                  }}
                  autoplay={{
                    delay: 3500, // فاصله بین اسلایدها به میلی‌ثانیه  
                    disableOnInteraction: false, // متوقف نشود با تعاملات کاربر  
                  }}
                  spaceBetween={20}
                  loop={true}
                  breakpoints={{
                    100: {
                      slidesPerView: 1, // یک اسلاید برای صفحه نمایش کوچک  
                    },
                    470: {
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
                    1280: {
                      slidesPerView: 2.3, // سه اسلاید برای صفحه نمایش بزرگ  
                    },
                    1400: {
                      slidesPerView: 2.6, // سه اسلاید برای صفحه نمایش بزرگ  
                    },
                    1700: {
                      slidesPerView: 3, // سه اسلاید برای صفحه نمایش بزرگ  
                    },
                  }}
                  className='px-2 py-3'
                >

                  {prop.children}

                </Swiper>
              </div>

              <NavigationBtnCard prev='NewProducts-prev' next='NewProducts-next' />

            </div>

            <div className='box-banner-product-slide-two'>
              <Link to='/'>
                <img src={prop.src} className='img-banner-product-slide-two' alt="" />
              </Link>
            </div>

          </div>

          : prop.Amazing == true ?
            <div className='parent-swiper-box'>
              <div className='h-100 mx-swiper-box'>
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation={{
                    nextEl: '#NewProducts-next',
                    prevEl: '#NewProducts-prev'
                  }}
                  autoplay={{
                    delay: 4000, // فاصله بین اسلایدها به میلی‌ثانیه  
                    disableOnInteraction: false, // متوقف نشود با تعاملات کاربر  
                  }}
                  spaceBetween={20}
                  loop={true}
                  breakpoints={{
                    100: {
                      slidesPerView: 1, // یک اسلاید برای صفحه نمایش کوچک  
                    },
                    470: {
                      slidesPerView: 1.2, // یک اسلاید برای صفحه نمایش کوچک  
                    },
                    560: {
                      slidesPerView: 1.5, // یک اسلاید برای صفحه نمایش کوچک  
                    },
                    800: {
                      slidesPerView: 1.8, // یک اسلاید برای صفحه نمایش کوچک  
                    },
                    992: {
                      slidesPerView: 2.7, // سه اسلاید برای صفحه نمایش بزرگ  
                    },
                    1280: {
                      slidesPerView: 3, // سه اسلاید برای صفحه نمایش بزرگ  
                    },
                    1400: {
                      slidesPerView: 3.7, // سه اسلاید برای صفحه نمایش بزرگ  
                    },
                    1700: {
                      slidesPerView: 4, // سه اسلاید برای صفحه نمایش بزرگ  
                    }
                  }}
                  className='px-2 bg-btn py-3'
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
                  modules={[Navigation, Autoplay]}
                  navigation={{
                    nextEl: '#NewProducts-next',
                    prevEl: '#NewProducts-prev'
                  }}
                  autoplay={{
                    delay: 6500, // فاصله بین اسلایدها به میلی‌ثانیه  
                    disableOnInteraction: false, // متوقف نشود با تعاملات کاربر  
                  }}
                  spaceBetween={20}
                  loop={true}
                  breakpoints={{
                    100: {
                      slidesPerView: 1, // یک اسلاید برای صفحه نمایش کوچک  
                    },
                    470: {
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
                    1280: {
                      slidesPerView: 3, // سه اسلاید برای صفحه نمایش بزرگ  
                    },
                    1400: {
                      slidesPerView: 3.7, // سه اسلاید برای صفحه نمایش بزرگ  
                    },
                    1700: {
                      slidesPerView: 4, // سه اسلاید برای صفحه نمایش بزرگ  
                    }
                  }}
                  className='px-2 py-3'
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