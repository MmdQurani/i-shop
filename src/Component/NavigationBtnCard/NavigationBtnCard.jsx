import React from 'react'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import './NavigationBtnCard.css'

function NavigationBtnCard() {
  return (
    <div dir='rtl' className='navigation-btn-st d-md-flex d-none flex-row justify-content-between'>
      <button className='swiper-next-button'>
        <FaChevronRight className='icon-swiper' />
      </button>
      <button className='swiper-prev-button'>
        <FaChevronLeft className='icon-swiper' />
      </button>
    </div>
  )
}

export default NavigationBtnCard