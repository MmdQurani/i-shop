import React, { useState } from 'react'
import BtnTopbar from './BtnTopbar/BtnTopbar';
import LogoBox from './LogoBox/LogoBox';
import SearchBox from './SearchBox/SearchBox';
import { Offcanvas } from 'react-bootstrap';
import { IoMenu } from "react-icons/io5";

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
            {/* <OffcanvasHeader display='d_flex_sm' /> */}
            <>
              <button className='d_btn_canvas btn m-0' style={{ boxShadow: '-2px 2px 5px #0000001f' }} onClick={handleShow}>
                <IoMenu fontSize={32} color='#00144a' />
              </button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the elements you
                  have chosen. Like, text, images, lists, etc.
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