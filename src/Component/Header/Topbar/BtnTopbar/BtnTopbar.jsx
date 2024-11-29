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
        <Link to='/'>
          <button style={{ boxShadow: '-2px 2px 5px #0000001f' }} className='btn bg-main text-color-main px_lg py-2 rounded-3'>
            <span className='fs-6'>
              <span className='d_inline_lg'>ورود / ثبت نام</span>
              <LuUser2 className='ms-1' color='#00144a' fontSize={18} />
            </span>
          </button>
        </Link>
      </div>
    </>
  )
}

export default BtnTopbar