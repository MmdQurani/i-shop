import React, { useState } from 'react'
import './ProductBox.css'
import SampleImgProduct from '../SampleImgProduct/SampleImgProduct'
import { Link } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'
import { BiSolidDiscount } from 'react-icons/bi'

function ProductBox() {
  return (
    <>
      <div className="product-box bg-main card py-4 px-4 mt-4">
        <div className="row row-gap-5" dir='rtl'>
          <div className="col-lg-5 col-12">
            <SampleImgProduct />
          </div>

          <div className="col-lg-7 col-12">
            <div className='d-flex flex-column justify-content-start h-100'>
              <ProductTitle title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' />

              <ProductInfoTitle title='توضیحات محصول' />

              <p className='p-0 m-0 mt-2 lh-32 text-color-main text-line-clamp-6 fs-price-card'>گوشی موبایل iPhone 13 CH پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه بازار شده است. نمایشگر آیفون 13 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است. امکان شارژ بی‌‌سیم باتری در این گوشی وجود دارد. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است که در آیفون جدید اپل به کار گرفته شده است. از نظر سخت‌‌افزاری این گوشی از تراشه­‌ی جدید A15 بهره می‌برد که دارای 15 میلیارد ترانزیستور است که دارای کنترل گرمای مطلوبی بوده که تا بتواند علاوه بر کارهای معمول، از قابلیت‌های جدید واقعیت مجازی که اپل این روزها روی آن تمرکز خاصی دارد، پشتیبانی کند. به گفته خود شرکت اپل این گوشی دارای سرعتی 50 برابر نسخه 12 خود است. پردازنده دارای ماژولار جدیدی است که مصرف باتری را بسیار پایین‌تر آورده است و شما دارای حفظ باتری بالاتری هستید</p>

              <ProductInfoTitle title='ویژگی محصول' />

              <div className="row mt-3 mb-3 row-gap-3">
                <ProductFeatures featureTitle='رنگ' feature='آبی, قرمز, مشکی' />
                <ProductFeatures featureTitle='گارانتی' feature='25 روزه' />
                <ProductFeatures featureTitle='سایز' feature='بزرگ, کوچک' />
                <ProductFeatures featureTitle='بلندگو' feature='استریو' />
              </div>

              <div className='d-flex flex-column-sm row-gap-4 justify-content-between align-items-center w-100 mt-4'>
                <div className='d-flex flex-column row-gap-3'>
                  <ShopingCardBtn />
                  <NumberInput />
                </div>
                <div className='d-flex flex-column align-items-end row-gap-2'>
                  <PrevPrice />
                  <PriceNow />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export function ProductTitle(prop) {
  return (
    <>
      <span className='fs-4 text-color-main'>{prop.title}</span>
    </>
  )
}

export function ProductInfoTitle(prop) {
  return (
    <>
      <span className='fs-6 sub-text-color-main mt-5'>{prop.title}</span>
    </>
  )
}

export function ProductFeatures(prop) {
  return (
    <>
      <div className="col-xxl-3 col-6">
        <div className='d-flex flex-row align-items-center column-gap-2 w-100'>
          <span className='fs-price-card sub-text-color-main'>{prop.featureTitle}</span>
          <span className='fs-ItemSiteFooter text-color-main text-st-blog-suggested'>{prop.feature}</span>
        </div>
      </div>
    </>
  )
}

export function ShopingCardBtn() {
  return (
    <>
      <Link to='/' className='btn bg-btn d-flex py-2 px-2 flex-row column-gap-1 align-items-center' style={{ width: 'max-content' }}>
        <span className='shoping-card-title'>افزودن به سبد خرید</span>
        <FaCartShopping fontSize={20} />
      </Link>
    </>
  )
}

export function NumberInput() {

  const [count, setCount] = useState(1);

  const decrease = () => {
    {
      count > 1 ?
        setCount(prev => prev - 1)
        :
        setCount(1)
    }
  }

  const increase = () => {
    setCount(prev => prev + 1)
  }

  return (
    <>
      <div className="number-input bg-main rounded-2 w-100 d-flex flex-row justify-content-center align-items-center">
        <button className='text-color-main' onClick={decrease}>-</button>
        <input type="number" id="product-quantity" value={count} min="1" readOnly />
        <button className='text-color-main' onClick={increase}>+</button>
      </div>
    </>
  )
}

export function PrevPrice() {
  return (
    <>
      <div className='d-flex flex-row column-gap-1 align-items-center'>
        <span className='prev-price'>50,000,000</span>
        <BiSolidDiscount className='bg-btn rounded-2 discount-st' />
      </div>
    </>
  )
}

export function PriceNow() {
  return (
    <>
      <div className='d-flex flex-row align-items-center column-gap-1 text-color-main'>
        <p className='m-0 p-0 Price-now'>50,000,000</p>
        <span className='Currency-st px-2 rounded-2 py-1'>تومان</span>
      </div>
    </>
  )
}

export default ProductBox