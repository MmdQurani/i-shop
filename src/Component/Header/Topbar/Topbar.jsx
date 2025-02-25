import React, { useState } from 'react'
import BtnTopbar from './BtnTopbar/BtnTopbar';
import LogoBox from './LogoBox/LogoBox';
import SearchBox from './SearchBox/SearchBox';
import { Offcanvas } from 'react-bootstrap';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './Topbar.css'
import { NavbarItemsBtn } from '../NavbarBtns/NavbarBtns';

function Topbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='bg-main topBar'>
      <nav className='d-flex flex-row pt-4 justify-content-between h-100'>
        <BtnTopbar display='d_flex_lg' />
        <div className='right-box-topbar w_box_topbar_right d-flex justify-content-center align-items-center'>
          <div className='h-100 w-100 d-flex flex-row justify-content-between align-items-center'>
            <SearchBox display='d_flex_lg' margin='me_lg' width='w_lg' />
            <LogoBox />
            <>
              <button className='d_btn_canvas btn m-0' style={{ boxShadow: '-2px 2px 5px #0000001f' }} onClick={handleShow}>
                <IoMenu fontSize={32} color='#00144a' />
              </button>

              <Offcanvas className='bg-offcanvas' show={show} onHide={handleClose} placement="end" >
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                  <ul className='m-0 p-0 d-flex flex-row justify-content-between'>
                    <li className='list-group-item'>
                      <span className='fs-4 text-color-two'>شگفت انگیزشو</span>
                    </li>
                    <li className='list-group-item'>
                      <img src="assets/img/Logo/logo1.jpg" width={150} alt="" />
                    </li>
                  </ul>
                  <SearchBox />
                  <ul className='m-0 p-0 d-flex flex-column row-gap-3' style={{listStyle:'none'}}>
                    <li className='py-2 px-2 rounded-2' >
                      <NavbarItemsBtn to='/' title='صفحه اصلی' />
                    </li>
                    <li className='py-2 px-2 rounded-2' >
                      <NavbarItemsBtn to='/' title='صفحات قالب' />
                    </li>
                    <li className='py-2 px-2 rounded-2' >
                      <NavbarItemsBtn to='/shop' title='فروشگاه' />
                    </li>
                    <li className='py-2 px-2 rounded-2' >
                      <NavbarItemsBtn to='/faqs' title='سوالات متداول' />
                    </li>
                    <li className='py-2 px-2 rounded-2' >
                      <NavbarItemsBtn to='/offers' title='شگفت انگیزشو' />
                    </li>
                    <li className='py-2 px-2 rounded-2' >
                      <NavbarItemsBtn to='/blogs' title='وبلاگ' />
                    </li>
                  </ul>
                </Offcanvas.Body>
              </Offcanvas>
            </>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Topbar