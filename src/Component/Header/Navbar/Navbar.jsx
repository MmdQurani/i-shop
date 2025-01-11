import React from 'react'
import BtnTopbar from '../Topbar/BtnTopbar/BtnTopbar';
import SearchBox from '../Topbar/SearchBox/SearchBox';
import NavbarBtns from '../NavbarBtns/NavbarBtns';
import './Navbar.css'

// console.log(window.scrollY)

function Navbar() {
  return (
    <div className='d-flex justify-content-center bg-main align-items-center flex-row'>
      <div className='d-flex justify-content-between align-items-center flex-row w-100 h-100'>
          <div className='d-flex justify-content-center align-items-center h-100' style={{ width: 'max-content' }}>
            <span className='fs-4 text-color-two d_flex_lg'>شگفت انگیزشو</span>
            <BtnTopbar display='d_flex_sm' />
          </div>
          <NavbarBtns display='d_flex_lg' />
          <SearchBox display='d_flex_sm' />
      </div>
    </div>
  )
}

export default Navbar