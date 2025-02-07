import React from 'react'

function TechnicalSpecifications() {
  return (
    <div className='TechnicalSpecifications d-flex flex-column bg-main product-content py-4 px-4' dir='rtl'>
      <span className='title-1-review-product text-color-content fs-5 mt-2'>توضیحات تکمیلی</span>

      <ul className='list-group p-0 list-group-flush row-gap-4 mt-4'>
        <LiListTechnicalSpecifications Attribute='وزن' Feature='40 کیلوگرم' />
        <LiListTechnicalSpecifications Attribute='رنگ' Feature='آبی, قرمز, مشکی' />
        <LiListTechnicalSpecifications Attribute='گارانتی' Feature='25 روزه' />
        <LiListTechnicalSpecifications Attribute='سایز' Feature='بزرگ, کوچک' />
        <LiListTechnicalSpecifications Attribute='بلندگو' Feature='استریو' />
        <LiListTechnicalSpecifications Attribute='تراکم پیکسلی' Feature='۴۶۰ پیکسل بر اینچ' />
        <LiListTechnicalSpecifications Attribute='تعداد سیم کارت' Feature='تک سیم کارت' />
        <LiListTechnicalSpecifications Attribute='رزولوشن عکس' Feature='60 مگاپیکسل' />
        <LiListTechnicalSpecifications Attribute='ساختار بدنه' Feature='جنس پلاستیک' />
        <LiListTechnicalSpecifications Attribute='صفحه‌ نمایش' Feature='Super Retina XDR OLED' />
        <LiListTechnicalSpecifications Attribute='سیستم عامل' Feature='آی او اس' />
        <LiListTechnicalSpecifications Attribute='کارت حافظه' Feature='فاقد پشتیبانی از کارت حافظه' />
      </ul>
    </div>
  )
}

export function LiListTechnicalSpecifications(prop) {
  return (
    <>
      <li className='list-group-item li-list-TechnicalSpecifications d-flex flex-row column-gap-5'>
        <span className='sub-text-color-main w-25'>{prop.Attribute}</span>
        <span className='text-color-main w-100'>{prop.Feature}</span>
      </li>
    </>
  )
}

export default TechnicalSpecifications