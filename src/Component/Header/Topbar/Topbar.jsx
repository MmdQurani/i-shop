import React from 'react'
import { Link } from 'react-router-dom'
import { LuUser2 } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";

function Topbar() {
  return (
    <div className='bg-main topBar'>
      <nav className='d-flex flex-row justify-content-between h-100'>
        <div className='left-box-topbar d-flex flex-row justify-content-start align-items-center column-gap-3'>
          <Link to='/'>
            <button style={{boxShadow:'-2px 2px 5px #f0405588'}} className='btn bg-btn px-3 py-2 rounded-3 fs-6'><span>سبد خرید</span> <span>0</span></button>
          </Link>
          <Link to='/'>
            <button style={{boxShadow:'-2px 2px 5px #0000001f'}} className='btn bg-main text-color-main px-3 py-2 rounded-3'>
              <span className='fs-6'>
              ورود / ثبت نام
              <LuUser2 className='ms-1' fontSize={18} />
              </span>
            </button>
          </Link>
        </div>
        <div style={{ width: '50%', height: '100%', backgroundColor: '#001230' }}></div>
      </nav>
    </div>
  )
}

export default Topbar