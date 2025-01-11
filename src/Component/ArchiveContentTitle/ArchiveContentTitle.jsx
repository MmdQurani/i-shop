import React from 'react'
import './ArchiveContentTitle.css'
import { Link } from 'react-router-dom'

function ArchiveContentTitle() {
  return (
    <>
      <div className="archive-content-title d-flex justify-content-between">
        <span className='text-color-main' dir='rtl'>20 محصول</span>

        <ol className="breadcrumb breadcrumb-style">
          <li className="breadcrumb-item">
            <span className='text-color-main'>فروشگاه</span>
          </li>

          <li className="breadcrumb-item active">
            <Link to='/' className='text-decoration-none sub-text-color-main'>آی شاپ</Link>
          </li>
        </ol>
      </div>
    </>
  )
}

export default ArchiveContentTitle