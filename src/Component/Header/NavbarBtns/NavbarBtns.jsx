import React from 'react'
import { Link } from 'react-router-dom'

function NavbarBtns(prop) {
  return (
    <>
      <div className={`h-100 w-navbar-item ${prop.display} justify-content-center align-items-center flex-row`}>
        <ul className='w-75 m-0 h-100 d-flex justify-content-between align-items-center flex-row-reverse'>
          <li className='list-group-item'>
            <NavbarItemsBtn to='/' title='صفحه اصلی' />

          </li>
          <li className='list-group-item'>
            <NavbarItemsBtn to='/' title='صفحات قالب' />
          </li>
          <li className='list-group-item'>
            <NavbarItemsBtn to='/shop' title='فروشگاه' />
          </li>
          <li className='list-group-item'>
            <NavbarItemsBtn to='/faqs' title='سوالات متداول' />
          </li>
          <li className='list-group-item'>
            <NavbarItemsBtn to='/offers' title='شگفت انگیزشو' />
          </li>
          <li className='list-group-item'>
            <NavbarItemsBtn to='/blogs' title='وبلاگ' />
          </li>
        </ul>
        <div className='mx-3' style={{ width: '1px', height: '50%', backgroundColor: '#1e36bd30' }} />
        <div className='d-flex justify-content-center align-items-center'>
          <Link to='/' className='link-st'>دسته بندی محصولات</Link>
        </div>
      </div>
    </>
  )
}

export function NavbarItemsBtn(prop) {
  return (
    <Link to={prop.to} className='link-st'>{prop.title}</Link>
  )
}

export default NavbarBtns