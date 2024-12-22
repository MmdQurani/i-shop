import React from 'react'
import { FaAngleLeft , FaAngleRight } from "react-icons/fa6";
import './NavigationBtnCard.css'

function NavigationBtnCard(prop) {
  return (
    <div dir='rtl' className='navigation-btn-st d-md-flex d-none flex-row justify-content-between'>
      <button className='swiper-next-button' id={prop.next}>
        <FaAngleRight className='icon-swiper' />
      </button>
      <button className='swiper-prev-button' id={prop.prev}>
        <FaAngleLeft className='icon-swiper' />
      </button>
    </div>
  )
}

export default NavigationBtnCard