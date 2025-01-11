import React from 'react'
import './Category.css'
import ArchiveContentTitle from '../../Component/ArchiveContentTitle/ArchiveContentTitle'
import SideRightCategory from '../../Component/SideRightCategory/SideRightCategory'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Category() {
  return (
    <main className='Category bg-main'>
      <ArchiveContentTitle />

      <div className='content-category row mt-4' dir='rtl'>

        <div className="col-xxl-3 col-xl-4 col-lg-4 p-0 d-lg-flex d-none">
          <SideRightCategory />
        </div>

        <div className="col-xxl-9 col-xl-8 col-lg-8 col-12">
          <div className='main-content-category'>
            <SortingProducts />
          </div>
        </div>

      </div>
    </main>
  )
}

export function SortingProducts() {
  return (
    <>
      <div className='Sorting-products bg-main w-100 h-100 d-flex flex-md-row flex-column justify-content-between align-items-center px-3 py-3 row-gap-3 rounded-2'>
        <div className='Sorting-products-title d-flex flex-md-row flex-column row-gap-3 justify-content-center align-items-center'>
          <span className='text-color-main' style={{ fontSize: '14px' }}>مرتب سازی براساس :</span>

          <div className='sub-text-color-main d-flex flex-wrap flex-row column-gap-2 row-gap-2 justify-content-center align-items-center me-1'>
            <Link to='/' className='sub-text-color-main active text-decoration-none' style={{ fontSize: '16px' }}>جدیدترین</Link>
            |
            <Link to='/' className='sub-text-color-main text-decoration-none' style={{ fontSize: '16px' }}>پرفروش ترین</Link>
            |
            <Link to='/' className='sub-text-color-main text-decoration-none' style={{ fontSize: '16px' }}>ارزان ترین</Link>
            |
            <Link to='/' className='sub-text-color-main text-decoration-none' style={{ fontSize: '16px' }}>گران ترین</Link>
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

export default Category