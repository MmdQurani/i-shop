import React from 'react'
import ProductSlide from '../ProductSlide/ProductSlide'
import { SwiperSlide } from 'swiper/react'
import BoxCards from '../BoxCards/BoxCards'

function Mobile() {
  return (
    <>
      <ProductSlide HeadSection='موبایل' src='./assets/img/BannerNewProducts/Mobile-1.jpg' moreItems={true}>

        <SwiperSlide className=' my-auto d-flex align-items-center'>
          <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
        </SwiperSlide>

        <SwiperSlide className=' my-auto d-flex align-items-center'>
          <BoxCards src='./assets/img/Products/4-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
        </SwiperSlide>

        <SwiperSlide className=' my-auto d-flex align-items-center'>
          <BoxCards src='./assets/img/Products/8-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
        </SwiperSlide>

        <SwiperSlide className=' my-auto d-flex align-items-center'>
          <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
        </SwiperSlide>

        <SwiperSlide className=' my-auto d-flex align-items-center'>
          <BoxCards src='./assets/img/Products/4-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
        </SwiperSlide>

      </ProductSlide>
    </>
  )
}

export default Mobile