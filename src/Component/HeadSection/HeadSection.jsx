import React , {useEffect} from 'react'
import './HeadSection.css'
import { FaChevronCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

function HeadSection() {

  return (
    <div className='head-section d-flex flex-row justify-content-between align-items-center mt-4 mb-4'>
      <Link to='/' className='head-section-left bg-main px-3 text-decoration-none fs-6'>
      <FaChevronCircleLeft fontSize={22} className='icon-head-section me-3' />
        مشاهده همه
      </Link>
      <div className='head-section-right bg-main px-3 fs-6'>دسته بندی های محبوب</div>
    </div>
  )
}

export default HeadSection