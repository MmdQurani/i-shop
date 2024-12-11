import React from 'react'
import Story from '../../Component/Storys/Storys'
import TrendSlider from '../../Component/TrendSlider/TrendSlider'
import PopularCategories from '../../Component/PopularCategories/PopularCategories'
import ProductSlide from '../../Component/ProductSlide/ProductSlide'
import { SwiperSlide } from 'swiper/react'
import BoxCards from '../../Component/BoxCards/BoxCards'

function Home() {
  return (
    <main className=''>
      <Story />
      <TrendSlider />
      <PopularCategories />

      <ProductSlide HeadSection='محصولات جدید'>

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

      <ProductSlide HeadSection='پرفورش ترین ها'>

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

    </main>
  )
}

export default Home