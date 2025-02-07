import React from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import './NavigationBtnCard.css'

function NavigationBtnCard(prop) {
  return (
    <div dir='rtl' className='navigation-btn-st bg-main d-md-flex d-none flex-row justify-content-between'>
      <button className='swiper-next-button bg-main' id={prop.next}>
        <FaAngleRight className='icon-swiper' />
      </button>
      <button className='swiper-prev-button bg-main' id={prop.prev}>
        <FaAngleLeft className='icon-swiper' />
      </button>
    </div>
  )
}

export default NavigationBtnCard