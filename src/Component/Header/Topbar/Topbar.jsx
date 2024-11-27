import React from 'react'
import { Link } from 'react-router-dom'
import { LuUser2 } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { Image } from 'react-bootstrap';

function Topbar() {
  return (
    <div className='bg-main topBar'>
      <nav className='d-flex flex-row pt-4 justify-content-between h-100'>
        <div className='left-box-topbar d-flex flex-row justify-content-start align-items-center column-gap-3'>
          <Link to='/'>
            <button style={{ boxShadow: '-2px 2px 5px #f0405588' }} className='btn bg-btn px-3 py-2 rounded-3 fs-6'><span>سبد خرید</span> <span>0</span></button>
          </Link>
          <Link to='/'>
            <button style={{ boxShadow: '-2px 2px 5px #0000001f' }} className='btn bg-main text-color-main px-3 py-2 rounded-3'>
              <span className='fs-6'>
                ورود / ثبت نام
                <LuUser2 className='ms-1' fontSize={18} />
              </span>
            </button>
          </Link>
        </div>
        <div className='right-box-topbar d-flex justify-content-center align-items-center'>
          <div className='h-100 w-100 d-flex flex-row justify-content-end align-items-center'>
            <div className='h-100 d-flex justify-content-center align-items-center me-5 w-100 px-3'>
              <div dir='rtl' style={{height:'max-content' , backgroundColor:'#F3F5F8'}} className='w-100 px-3 rounded-3 d-flex flex-row justify-content-end align-items-center'>
                <input id='input' type="text" placeholder='نام محصول،دسته محصول،برند محصول،...' className='w-100 text-color-main h-100 fs-6 py-2 border-0' style={{outline:'none' , backgroundColor:'transparent'}} />
                <button style={{backgroundColor:'transparent'}} className='border-0'>
                <FaSearch fontSize={18} color='#09155781' />
                </button>
              </div>
            </div>
            <div className='h-100 d-flex justify-content-center align-items-center'>
              <Image src='./public/assets/img/Logo/logo1.jpg' width={180} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Topbar