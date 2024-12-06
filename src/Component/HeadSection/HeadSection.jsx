import React, { useEffect } from 'react'
import './HeadSection.css'
import { FaChevronCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

function HeadSection(prop) {
  return (
    <>
      {prop.moreItems ?
        <div className='head-section d-flex flex-row justify-content-between align-items-center mt-4 mb-4'>
          <Link to={`${prop.Link}`} className='head-section-left bg-main px-3 text-decoration-none fs-HeadSection'>
            <FaChevronCircleLeft fontSize={22} className='icon-head-section me-3' />
            مشاهده همه
          </Link>
          <div className='head-section-right bg-main px-3 fs-HeadSection'>{prop.title}</div>
        </div>
        :
        <div className='head-section d-flex flex-row justify-content-end align-items-center mt-4 mb-4'>
          <div className='head-section-right bg-main px-3 fs-HeadSection'>{prop.title}</div>
        </div>
      }

    </>
  )
}

export default HeadSection