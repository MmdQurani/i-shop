import React from 'react'
import './PopularCategories.css'
import HeadSection from '../HeadSection/HeadSection'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import NavigationBtnCard from '../NavigationBtnCard/NavigationBtnCard';

function ProductSliderMain() {
  return (
    <div>
      <HeadSection moreItems={true} title={`دسته بندی های محبوب`} link='/' />

      <div className='parent-swiper-box'>
        <div className='h-100 mx-swiper-box'>
          <Swiper
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
            className='px-2'
          >

            <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
              <Link to='/' className='text-decoration-none'>
                <div className='w-100 h-100 d-flex flex-column'>
                  <div style={{ width: '100%', height: '70%' }} className='d-flex justify-content-center align-items-center'>
                    <img src="assets/img/PopularCategories/9.jpg" style={{ width: '5rem' }} alt="" />
                  </div>
                  <div style={{ width: '100%', height: '30%' }} className='text-color-main d-flex justify-content-center align-items-center'>
                    <span>ساعت هوشمند</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
              <Link to='/' className='text-decoration-none'>
                <div className='w-100 h-100 d-flex flex-column'>
                  <div style={{ width: '100%', height: '70%' }} className='d-flex justify-content-center align-items-center'>
                    <img src="assets/img/PopularCategories/9.jpg" style={{ width: '5rem' }} alt="" />
                  </div>
                  <div style={{ width: '100%', height: '30%' }} className='text-color-main d-flex justify-content-center align-items-center'>
                    <span>ساعت هوشمند</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
              <Link to='/' className='text-decoration-none'>
                <div className='w-100 h-100 d-flex flex-column'>
                  <div style={{ width: '100%', height: '70%' }} className='d-flex justify-content-center align-items-center'>
                    <img src="assets/img/PopularCategories/9.jpg" style={{ width: '5rem' }} alt="" />
                  </div>
                  <div style={{ width: '100%', height: '30%' }} className='text-color-main d-flex justify-content-center align-items-center'>
                    <span>ساعت هوشمند</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
              <Link to='/' className='text-decoration-none'>
                <div className='w-100 h-100 d-flex flex-column'>
                  <div style={{ width: '100%', height: '70%' }} className='d-flex justify-content-center align-items-center'>
                    <img src="assets/img/PopularCategories/9.jpg" style={{ width: '5rem' }} alt="" />
                  </div>
                  <div style={{ width: '100%', height: '30%' }} className='text-color-main d-flex justify-content-center align-items-center'>
                    <span>ساعت هوشمند</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
              <Link to='/' className='text-decoration-none'>
                <div className='w-100 h-100 d-flex flex-column'>
                  <div style={{ width: '100%', height: '70%' }} className='d-flex justify-content-center align-items-center'>
                    <img src="assets/img/PopularCategories/9.jpg" style={{ width: '5rem' }} alt="" />
                  </div>
                  <div style={{ width: '100%', height: '30%' }} className='text-color-main d-flex justify-content-center align-items-center'>
                    <span>ساعت هوشمند</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
              <Link to='/' className='text-decoration-none'>
                <div className='w-100 h-100 d-flex flex-column'>
                  <div style={{ width: '100%', height: '70%' }} className='d-flex justify-content-center align-items-center'>
                    <img src="assets/img/PopularCategories/9.jpg" style={{ width: '5rem' }} alt="" />
                  </div>
                  <div style={{ width: '100%', height: '30%' }} className='text-color-main d-flex justify-content-center align-items-center'>
                    <span>ساعت هوشمند</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
              <Link to='/' className='text-decoration-none'>
                <div className='w-100 h-100 d-flex flex-column'>
                  <div style={{ width: '100%', height: '70%' }} className='d-flex justify-content-center align-items-center'>
                    <img src="assets/img/PopularCategories/9.jpg" style={{ width: '5rem' }} alt="" />
                  </div>
                  <div style={{ width: '100%', height: '30%' }} className='text-color-main d-flex justify-content-center align-items-center'>
                    <span>ساعت هوشمند</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
              <Link to='/' className='text-decoration-none'>
                <div className='w-100 h-100 d-flex flex-column'>
                  <div style={{ width: '100%', height: '70%' }} className='d-flex justify-content-center align-items-center'>
                    <img src="assets/img/PopularCategories/9.jpg" style={{ width: '5rem' }} alt="" />
                  </div>
                  <div style={{ width: '100%', height: '30%' }} className='text-color-main d-flex justify-content-center align-items-center'>
                    <span>ساعت هوشمند</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
              <Link to='/' className='text-decoration-none'>
                <div className='w-100 h-100 d-flex flex-column'>
                  <div style={{ width: '100%', height: '70%' }} className='d-flex justify-content-center align-items-center'>
                    <img src="assets/img/PopularCategories/9.jpg" style={{ width: '5rem' }} alt="" />
                  </div>
                  <div style={{ width: '100%', height: '30%' }} className='text-color-main d-flex justify-content-center align-items-center'>
                    <span>ساعت هوشمند</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
              <Link to='/' className='text-decoration-none'>
                <div className='w-100 h-100 d-flex flex-column'>
                  <div style={{ width: '100%', height: '70%' }} className='d-flex justify-content-center align-items-center'>
                    <img src="assets/img/PopularCategories/9.jpg" style={{ width: '5rem' }} alt="" />
                  </div>
                  <div style={{ width: '100%', height: '30%' }} className='text-color-main d-flex justify-content-center align-items-center'>
                    <span>ساعت هوشمند</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

          </Swiper>
        </div>

        <NavigationBtnCard />
        
      </div>
    </div>
  )
}

export default ProductSliderMain