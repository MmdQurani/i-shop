import React from 'react'
import { FaSearch } from "react-icons/fa";

function SearchBox(prop) {
  return (
    <>
      <div className={`${prop.display} justify-content-center align-items-center ${prop.margin} ${prop.width} px-3`}>
        <div dir='rtl' style={{ height: 'max-content', backgroundColor: '#F3F5F8' }} className='w-100 px-2 rounded-3 d-flex flex-row justify-content-end align-items-center'>
          <input id='input' type="text" placeholder='نام محصول،دسته محصول،برند محصول،...' className='w-100 text-color-main h-100 fs-6 py-2 border-0' style={{ outline: 'none', backgroundColor: 'transparent' }} />
          <button style={{ backgroundColor: 'transparent' }} className='border-0'>
            <FaSearch fontSize={18} color='#09155781' />
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchBox