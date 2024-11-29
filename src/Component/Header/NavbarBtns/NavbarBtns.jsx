import React from 'react'
import { Link } from 'react-router-dom'

function NavbarBtns(prop) {
  return (
    <>
      <div className={`h-100 w-navbar-item ${prop.display} justify-content-center align-items-center flex-row`}>
          <ul className='w-75 m-0 h-100 d-flex justify-content-between align-items-center flex-row-reverse'>
            <li className='list-group-item'><Link to='/' className='link-st'>صفحه اصلی</Link></li>
            <li className='list-group-item'><Link to='/' className='link-st'>مشخصات قالب</Link></li>
            <li className='list-group-item'><Link to='/' className='link-st'>فروشگاه</Link></li>
            <li className='list-group-item'><Link to='/' className='link-st'>سوالات متداول</Link></li>
            <li className='list-group-item'><Link to='/' className='link-st'>شگفت انگیزشو</Link></li>
            <li className='list-group-item'><Link to='/' className='link-st'>وبلاگ</Link></li>
          </ul>
        <div className='mx-3' style={{ width: '1px', height: '50%', backgroundColor: '#1e36bd30' }} />
        <div className='d-flex justify-content-center align-items-center'>
          <Link to='/' className='link-st'>دسته بندی محصولات</Link>
        </div>
      </div>
    </>
  )
}

export default NavbarBtns