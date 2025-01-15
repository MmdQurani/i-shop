import React from 'react'
import { Link } from 'react-router-dom'
import { LuUser2 } from "react-icons/lu";

function BtnTopbar(prop) {
  return (
    <>
      <div className={`left-box-topbar ${prop.display} flex-row px-3 justify-content-start align-items-center column-gap-3`}>
        <Link to='/'>
          <button style={{ boxShadow: '-2px 2px 5px #f0405588' }} className='btn bg-btn px_lg py-2 rounded-3 fs-6'><span>سبد خرید</span> <span>0</span></button>
        </Link>
        <Link to='/login'>
          <button style={{ boxShadow: '-2px 2px 5px #0000001f' }} className='btn px-3 bg-main text-color-main px_lg py-2 rounded-3'>
            <div className='fs-6 d-flex justify-content-center align-items-center'>
              <span className='d_inline_lg me-2'>ورود / ثبت نام</span>
              <LuUser2 className='m-0' color='#00144a' fontSize={18} />
            </div>
          </button>
        </Link>
      </div>
    </>
  )
}

export default BtnTopbar