import React from 'react'
import HeadSection from '../HeadSection/HeadSection'
import NavigationBtnCard from '../NavigationBtnCard/NavigationBtnCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules';
import { Card, Button } from 'react-bootstrap'
import './NewProducts.css'
import 'swiper/css';
import BoxCards from '../BoxCards/BoxCards'

function NewProducts() {
  return (

    <div>
      <HeadSection moreItems={true} link='/' title='محصولات جدید' />

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

            <SwiperSlide className=' my-auto d-flex align-items-center'>
              <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000'/>

            </SwiperSlide>
            <SwiperSlide className=' my-auto d-flex align-items-center'>
              <BoxCards src='./assets/img/Products/4-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000'/>

            </SwiperSlide>
            <SwiperSlide className=' my-auto d-flex align-items-center'>
              <BoxCards src='./assets/img/Products/8-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000'/>

            </SwiperSlide>
            <SwiperSlide className=' my-auto d-flex align-items-center'>
              <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000'/>

            </SwiperSlide>
            <SwiperSlide className=' my-auto d-flex align-items-center'>
              <BoxCards src='./assets/img/Products/4-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000'/>

            </SwiperSlide>

          </Swiper>
        </div>

        <NavigationBtnCard prev='NewProducts-prev' next='NewProducts-next' />

      </div>
    </div>



  )
}

export default NewProducts