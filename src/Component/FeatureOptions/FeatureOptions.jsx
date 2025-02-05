import React from 'react'
import './FeatureOptions.css'
import { FiShield } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { BsTruck , BsBox } from "react-icons/bs";
import { PiMedal } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";

function FeatureOptions() {
  return (
    <>
      <div className='FeatureOptions mx-auto row row-gap-4 FeatureOptions-border w-100 rounded-2 py-4 px-3 mt-5' dir='rtl'>
        <FeatureOption title='هفـــــت‌روز‌ضمانـت‌کـــالا'>
          <FiShield fontSize={22} className='sub-text-color-main' />
        </FeatureOption>
        <FeatureOption title='امــــکان‌پـــرداخت‌در‌محل'>
          <FaRegStar fontSize={22} className='sub-text-color-main' />
        </FeatureOption>
        <FeatureOption title='امکان‌تحـویل‌اکســپرس'>
          <BsTruck fontSize={22} className='sub-text-color-main' />
        </FeatureOption>
        <FeatureOption title='ضمـــــانت‌اصل‌بودن‌کالا'>
          <PiMedal fontSize={22} className='sub-text-color-main' />
        </FeatureOption>
        <FeatureOption title='بستـــــــه‌بنــدی‌مطـــمئن'>
          <BsBox fontSize={22} className='sub-text-color-main' />
        </FeatureOption>
        <FeatureOption title='ارســال‌سریع‌سفارشـــات'>
          <LiaShippingFastSolid fontSize={22} className='sub-text-color-main' />
        </FeatureOption>
      </div>
    </>
  )
}

export function FeatureOption(prop) {
  return (
    <>
      <div className="col-xl-2 col-lg-4 col-6">
        <div className='feature-option w-100 d-flex flex-row column-gap-1 justify-content-center align-items-center'>
          {prop.children}
          <span className='fs-price-card sub-text-color-main text-st-blog-suggested'>{prop.title}</span>
        </div>
      </div>
    </>
  )
}

export default FeatureOptions