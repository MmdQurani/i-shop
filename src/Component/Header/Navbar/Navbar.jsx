import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

// console.log(window.scrollY)

function Navbar() {
  return (
    <div style={{ height: '45%' }} className='d-flex justify-content-center align-items-center flex-row'>
      <div className='d-flex justify-content-between align-items-center flex-row w-100 h-100'>
          <div className='d-flex justify-content-center align-items-center h-100' style={{ width: 'max-content' }}>
            <span className='fs-4 text-color-two'>شگفت انگیزشو</span>
          </div>
          <div className='h-100 w-50 d-flex justify-content-center align-items-center flex-row'>
            <div className='w-75 d-flex justify-content-between align-items-center flex-row-reverse'>
              <Link to='/' className='link-st'>صفحه اصلی</Link>
              <Link to='/' className='link-st'>مشخصات قالب</Link>
              <Link to='/' className='link-st'>فروشگاه</Link>
              <Link to='/' className='link-st'>سوالات متداول</Link>
              <Link to='/' className='link-st'>شگفت انگیزشو</Link>
              <Link to='/' className='link-st'>وبلاگ</Link>
            </div>
            <div className='mx-3' style={{width:'1px' , height:'50%' , backgroundColor:'#1e36bd30'}} />
            <div className='w-25 d-flex justify-content-center align-items-center'>
              <Link to='/' className='link-st'>دسته بندی محصولات</Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar