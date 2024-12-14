import React from 'react'
import ProductSlide from '../ProductSlide/ProductSlide'
import { SwiperSlide } from 'swiper/react'
import BoxCards from '../BoxCards/BoxCards'

function Laptop() {
  return (
    <>
      <ProductSlide HeadSection='لپ تاپ' src='./assets/img/BannerNewProducts/cat4-1.jpg'>

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

export default Laptop