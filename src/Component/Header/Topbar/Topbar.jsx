import React from 'react'
import { Link } from 'react-router-dom'

function Topbar() {
  return (
    <div className='bg-light topBar'>
      <nav className='d-flex flex-row justify-content-between h-100'>
        <div className='left-box-topbar d-flex flex-row justify-content-start align-items-center column-gap-3'>
          <Link to='/'>
            <button className='btn bg-btn px-4 py-2 rounded-3'>click left</button>
          </Link>
          <Link to='/'>
            <button className='btn bg-main text-color-main px-4 py-2 rounded-3'>click right</button>
          </Link>
        </div>
        <div style={{ width: '50%', height: '100%', backgroundColor: '#001230' }}></div>
      </nav>
    </div>
  )
}

export default Topbar