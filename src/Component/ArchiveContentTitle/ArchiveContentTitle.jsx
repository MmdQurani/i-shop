import React from 'react'
import './ArchiveContentTitle.css'
import { Link } from 'react-router-dom'

function ArchiveContentTitle(prop) {
  return (
    <>
      <div className="archive-content-title d-flex justify-content-between">
        <span className='text-color-main d-flex' dir='rtl'>{prop.countItem}</span>

        <ol className="breadcrumb breadcrumb-style d-flex flex-column-reverse flex-sm-row align-items-end row-gap-2">
          <li className="breadcrumb-item text-end">
            <span className='text-color-main'>{prop.pageName}</span>
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