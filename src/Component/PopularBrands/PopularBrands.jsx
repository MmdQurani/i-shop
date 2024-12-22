import React from 'react'
import './PopularBrands.css'
import HeadSection from '../HeadSection/HeadSection'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import NavigationBtnCard from '../NavigationBtnCard/NavigationBtnCard';

function PopularBrandsSlider(prop) {
  return (
    <div className='PopularBrands'>
      <>
        <HeadSection moreItems={null} title={`برندهای محبوب`} link='/' />

        <div className='parent-swiper-box'>
          <div className='h-100 mx-swiper-box'>
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '#ProductSliderMain-next',
                prevEl: '#ProductSliderMain-prev'
              }}
              spaceBetween={15}
              loop={true}
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
                  slidesPerView: 7, // سه اسلاید برای صفحه نمایش بزرگ  
                }
              }}
              style={{ height: '10rem', overflow: 'hidden' }}
              className='px-2'
            >
              {prop.children}
            </Swiper>
          </div>

          <NavigationBtnCard prev='ProductSliderMain-prev' next='ProductSliderMain-next' />

        </div>
      </>
    </div>
  )
}

export function PopularBrands() {
  return (
    <PopularBrandsSlider>
      <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
        <Link to='/' className='text-decoration-none'>
          <div className='w-100 h-100 d-flex flex-column'>
            <div style={{ width: '100%', height: '100%' }} className='d-flex justify-content-center align-items-center'>
              <img src="assets/img/PopularBrandsImg/1.png" style={{ width: '60%', objectFit: 'cover' }} alt="" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
        <Link to='/' className='text-decoration-none'>
          <div className='w-100 h-100 d-flex flex-column'>
            <div style={{ width: '100%', height: '100%' }} className='d-flex justify-content-center align-items-center'>
              <img src="assets/img/PopularBrandsImg/1.png" style={{ width: '60%', objectFit: 'cover' }} alt="" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
        <Link to='/' className='text-decoration-none'>
          <div className='w-100 h-100 d-flex flex-column'>
            <div style={{ width: '100%', height: '100%' }} className='d-flex justify-content-center align-items-center'>
              <img src="assets/img/PopularBrandsImg/1.png" style={{ width: '60%', objectFit: 'cover' }} alt="" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
        <Link to='/' className='text-decoration-none'>
          <div className='w-100 h-100 d-flex flex-column'>
            <div style={{ width: '100%', height: '100%' }} className='d-flex justify-content-center align-items-center'>
              <img src="assets/img/PopularBrandsImg/1.png" style={{ width: '60%', objectFit: 'cover' }} alt="" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
        <Link to='/' className='text-decoration-none'>
          <div className='w-100 h-100 d-flex flex-column'>
            <div style={{ width: '100%', height: '100%' }} className='d-flex justify-content-center align-items-center'>
              <img src="assets/img/PopularBrandsImg/1.png" style={{ width: '60%', objectFit: 'cover' }} alt="" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
        <Link to='/' className='text-decoration-none'>
          <div className='w-100 h-100 d-flex flex-column'>
            <div style={{ width: '100%', height: '100%' }} className='d-flex justify-content-center align-items-center'>
              <img src="assets/img/PopularBrandsImg/1.png" style={{ width: '60%', objectFit: 'cover' }} alt="" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
        <Link to='/' className='text-decoration-none'>
          <div className='w-100 h-100 d-flex flex-column'>
            <div style={{ width: '100%', height: '100%' }} className='d-flex justify-content-center align-items-center'>
              <img src="assets/img/PopularBrandsImg/1.png" style={{ width: '60%', objectFit: 'cover' }} alt="" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
        <Link to='/' className='text-decoration-none'>
          <div className='w-100 h-100 d-flex flex-column'>
            <div style={{ width: '100%', height: '100%' }} className='d-flex justify-content-center align-items-center'>
              <img src="assets/img/PopularBrandsImg/1.png" style={{ width: '60%', objectFit: 'cover' }} alt="" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
        <Link to='/' className='text-decoration-none'>
          <div className='w-100 h-100 d-flex flex-column'>
            <div style={{ width: '100%', height: '100%' }} className='d-flex justify-content-center align-items-center'>
              <img src="assets/img/PopularBrandsImg/1.png" style={{ width: '60%', objectFit: 'cover' }} alt="" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </PopularBrandsSlider>
  )
}

export default PopularBrands