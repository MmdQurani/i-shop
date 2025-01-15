import React from 'react'
import './Category.css'
import ArchiveContentTitle from '../../Component/ArchiveContentTitle/ArchiveContentTitle'
import SideRightCategory from '../../Component/SideRightCategory/SideRightCategory'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import BoxCards from '../../Component/BoxCards/BoxCards';
import { SwiperSlide } from 'swiper/react';
import { FaAngleLeft } from 'react-icons/fa';
import { MdKeyboardArrowLeft } from 'react-icons/md';

function Category() {
  return (
    <div className='Category bg-main'>
      <ArchiveContentTitle />

      <div className='content-category row mt-4' dir='rtl'>

        <div className="col-xxl-3 col-xl-4 col-lg-4 p-0 d-lg-flex d-none">
          <div className='w-100 h-100 d-flex flex-column align-items-center'>
            <SideRightCategory>
              <SwiperSlide>
                <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </SwiperSlide>
              <SwiperSlide>
                <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </SwiperSlide>
              <SwiperSlide>
                <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </SwiperSlide>
            </SideRightCategory>

            <FilteringProductsSection />
          </div>
        </div>

        <div className="col-xxl-9 col-xl-8 col-lg-8 col-12">
          <div className='main-content-category d-flex flex-column justify-content-center align-items-center' >
            <SortingProducts />

            <div className='products-list-box row row-gap-4 w-100 justify-content-center align-items-center py-4'>
              <div className="col-xxl-4 col-md-6 col-sm-9 col-10 h-100">
                <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </div>
              <div className="col-xxl-4 col-md-6 col-sm-9 col-10 h-100">
                <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </div>
              <div className="col-xxl-4 col-md-6 col-sm-9 col-10 h-100">
                <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </div>
              <div className="col-xxl-4 col-md-6 col-sm-9 col-10 h-100">
                <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </div>
              <div className="col-xxl-4 col-md-6 col-sm-9 col-10 h-100">
                <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </div>
              <div className="col-xxl-4 col-md-6 col-sm-9 col-10 h-100">
                <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </div>
              <div className="col-xxl-4 col-md-6 col-sm-9 col-10 h-100">
                <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </div>
              <div className="col-xxl-4 col-md-6 col-sm-9 col-10 h-100">
                <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </div>
              <div className="col-xxl-4 col-md-6 col-sm-9 col-10 h-100">
                <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </div>
              <div className="col-xxl-4 col-md-6 col-sm-9 col-10 h-100">
                <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </div>
              <div className="col-xxl-4 col-md-6 col-sm-9 col-10 h-100">
                <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </div>
              <div className="col-xxl-4 col-md-6 col-sm-9 col-10 h-100">
                <BoxCards src='./assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export function SortingProducts() {
  return (
    <>
      <div className='Sorting-products bg-main w-100 h-100 d-flex flex-md-row flex-column justify-content-between align-items-center px-3 py-3 row-gap-3 rounded-2'>
        <div className='Sorting-products-title d-flex flex-md-row flex-column row-gap-3 justify-content-center align-items-center'>
          <span className='text-color-main' style={{ fontSize: '12px' }}>مرتب سازی براساس :</span>

          <div className='sub-text-color-main d-flex flex-wrap flex-row column-gap-2 row-gap-2 justify-content-center align-items-center me-1'>
            <Link to='/' className='sub-text-color-main active text-decoration-none' style={{ fontSize: '14px' }}>جدیدترین</Link>
            |
            <Link to='/' className='sub-text-color-main text-decoration-none' style={{ fontSize: '14px' }}>پرفروش ترین</Link>
            |
            <Link to='/' className='sub-text-color-main text-decoration-none' style={{ fontSize: '14px' }}>ارزان ترین</Link>
            |
            <Link to='/' className='sub-text-color-main text-decoration-none' style={{ fontSize: '14px' }}>گران ترین</Link>
          </div>
        </div>

        <div className='search-Sorting-products py-2 px-3 rounded-2'>
          <input type="text" placeholder='جستوجو' dir='rtl' className='w-100 h-100 border-0 d-md-none d-flex' style={{ backgroundColor: 'transparent', outline: 'none' }} />

          <Link to='/'>
            <IoSearch fontSize={28} className='sub-text-color-main' />
          </Link>
        </div>

      </div>
    </>
  )
}

export function FilteringProductsSection() {
  return (
    <>
      <div className='Filtering-Products-Section mt-4 bg-main card w-100 d-flex flex-column px-3' style={{ minHeight: '319px' }}>
        <span className='fs-6 text-color-main py-4 position-relative'>دسته بندی نتایج</span>
        <hr className='p-0 m-0 sub-text-color-main' />
        <ul className="list-group Filtering-Products-Section-List w-100 p-0 mt-4 border-0" style={{overflowY:'scroll' , height:'200px'}}>
          <li className="list-group-item item-filtering-product border-0 py-2 mt-1 d-flex flex-row justify-content-between align-items-center">
            <Link to='/' className='fs-6 text-decoration-none text-color-main'>ساعت هوشمند</Link>
            <MdKeyboardArrowLeft className='arrow-icon-hover fs-4 text-color-main' />
          </li>
          <li className="list-group-item item-filtering-product border-0 py-2 mt-1 d-flex flex-row justify-content-between align-items-center">
            <Link to='/' className='fs-6 text-decoration-none text-color-main'>ساعت هوشمند</Link>
            <MdKeyboardArrowLeft className='arrow-icon-hover fs-4 text-color-main' />
          </li>
          <li className="list-group-item item-filtering-product border-0 py-2 mt-1 d-flex flex-row justify-content-between align-items-center">
            <Link to='/' className='fs-6 text-decoration-none text-color-main'>ساعت هوشمند</Link>
            <MdKeyboardArrowLeft className='arrow-icon-hover fs-4 text-color-main' />
          </li>
          <li className="list-group-item item-filtering-product border-0 py-2 mt-1 d-flex flex-row justify-content-between align-items-center">
            <Link to='/' className='fs-6 text-decoration-none text-color-main'>ساعت هوشمند</Link>
            <MdKeyboardArrowLeft className='arrow-icon-hover fs-4 text-color-main' />
          </li>
          <li className="list-group-item item-filtering-product border-0 py-2 mt-1 d-flex flex-row justify-content-between align-items-center">
            <Link to='/' className='fs-6 text-decoration-none text-color-main'>ساعت هوشمند</Link>
            <MdKeyboardArrowLeft className='arrow-icon-hover fs-4 text-color-main' />
          </li>
          <li className="list-group-item item-filtering-product border-0 py-2 mt-1 d-flex flex-row justify-content-between align-items-center">
            <Link to='/' className='fs-6 text-decoration-none text-color-main'>ساعت هوشمند</Link>
            <MdKeyboardArrowLeft className='arrow-icon-hover fs-4 text-color-main' />
          </li>
          <li className="list-group-item item-filtering-product border-0 py-2 mt-1 d-flex flex-row justify-content-between align-items-center">
            <Link to='/' className='fs-6 text-decoration-none text-color-main'>ساعت هوشمند</Link>
            <MdKeyboardArrowLeft className='arrow-icon-hover fs-4 text-color-main' />
          </li>
        </ul>
      </div>
    </>
  )
}

export default Category