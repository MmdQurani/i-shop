import React from 'react'
import { Link } from 'react-router-dom'

function NavbarBtns(prop) {
  return (
    <>
      <div className={`h-100 w-navbar-item ${prop.display} justify-content-center align-items-center flex-row`}>
        <div className='w-75 d-flex justify-content-between align-items-center flex-row-reverse'>
          <Link to='/' className='link-st'>صفحه اصلی</Link>
          <Link to='/' className='link-st'>مشخصات قالب</Link>
          <Link to='/' className='link-st'>فروشگاه</Link>
          <Link to='/' className='link-st'>سوالات متداول</Link>
          <Link to='/' className='link-st'>شگفت انگیزشو</Link>
          <Link to='/' className='link-st'>وبلاگ</Link>
        </div>
        <div className='mx-3' style={{ width: '1px', height: '50%', backgroundColor: '#1e36bd30' }} />
        <div className='d-flex justify-content-center align-items-center'>
          <Link to='/' className='link-st'>دسته بندی محصولات</Link>
        </div>
      </div>
    </>
  )
}

export default NavbarBtns