import React from 'react'
import './Offers.css'
import ArchiveContentTitle from '../../Component/ArchiveContentTitle/ArchiveContentTitle'
import BoxCards from '../../Component/BoxCards/BoxCards'

function Offers() {
  return (
    <>
      <div className='Offers-shop'>
        <ArchiveContentTitle pageName='شگفت انگیزشو' countItem='13 محصول' />

        <div className="Offers-Products w-100 h-100 mt-4">
          <div className="row row-gap-4 justify-content-center align-items-center px-2">

            <div className="col-xxl-3 col-lg-4 col-sm-6 col-10">
              <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 col-10">
              <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 col-10">
              <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 col-10">
              <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
            </div>

            <div className="col-xxl-3 col-lg-4 col-sm-6 col-10">
              <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 col-10">
              <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 col-10">
              <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 col-10">
              <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
            </div>

          </div>
        </div>

        <div className='w-100 d-flex justify-content-center align-items-center mt-5'>
          <button className='More-items btn text-color-main card py-2 px-4' style={{ backgroundColor: '#E8EBF4' }}>بارگذاری بیشتر</button>
        </div>

      </div>
    </>
  )
}

export default Offers