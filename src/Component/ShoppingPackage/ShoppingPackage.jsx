import React from 'react'
import './ShoppingPackage.css'
import { Link } from 'react-router-dom'
import { PriceCard } from '../BoxCards/BoxCards'

function ShoppingPackage() {
  return (
    <div className='package_section text-color-main mt-4 d-flex justify-content-center align-items-center' style={{ height: 'max-content' }}>

      <div className="row w-100 h-100" dir='rtl'>
        <div className="banner_package mt-2 col-xl-8 col-xxl-9 col-12">
          <div className='w-100 h-100 py-1'>
            <img src="./assets/img/PackageImg/1-1.jpg" style={{ width: '100%', height: '100%', borderRadius: '1rem', objectFit: 'cover' }} alt="" />
          </div>
        </div>

        <div className="data_package mt-2 col-xl-4 col-xxl-3 col-12 px-2 pb-3 p-0 bg-main" style={{ borderRadius: '1rem', boxShadow: '0 0 8px var(--bg-head-section)' }}>

          <div className='w-100 h-100 p-2 d-flex flex-column align-items-center'>

            <div className='d-flex flex-column w-100 p-2'>
              <span className='fs-5'>پکیج گیمرها</span>
              <p className='m-0 mb-2 mt-3' style={{ fontSize: '13px' }}>این پکیج شامل تخفیفی عالی برای خرید چهار محصول با هم است ، برای کسانی که عاشق بازی هستند …</p>
            </div>

            <div className="row row-gap-3 w-100 py-2">

              <div className="col-12 p-0">
                <div className="row row-gap-4 py-2">

                  <DataPackage />
                  <DataPackage />
                  <DataPackage />
                  <DataPackage />

                </div>
              </div>

              <div className="col-12 w-100 d-flex justify-content-center align-items-center p-0">
                <div className="row w-100 row-gap-3">

                  <SampleImgPackage />
                  <SampleImgPackage />
                  <SampleImgPackage />
                  <SampleImgPackage />
                  <SampleImgPackage />
                  <SampleImgPackage />

                </div>
              </div>

            </div>

            <div className='price_package d-flex flex-row justify-content-between align-items-center w-100 py-2 mt-2'>
              <PriceCard price='80,000,000' dis='disabled'/>
              <PriceCard price='40,000,000'/>
            </div>

            <div className='btn_package w-100'>
              <Link to='/' className='btn d-block bg-btn py-2 mt-3'>میخرم</Link>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export function SampleImgPackage() {
  return (
    <div className="col-4 col-md-2 col-xl-4 d-flex justify-content-center align-items-center p-0">

      <Link to='/'>
        <div className='bg-main py-2 d-flex justify-content-center align-items-center' style={{ width: '80px', height: '80px', border: '1px solid var(--bg-head-section)', borderRadius: '0.7rem' }}>
          <img src="./assets/img/Products/8-150x150.png" style={{ width: '40px' }} alt="" />
        </div>
      </Link>

    </div>
  )
}

export function DataPackage() {
  return (
    <div className="col-6">
      <div>
        <p className='m-0 mb-2' style={{ fontSize: '13px' }}>نام پکیج</p>
        <span>پکیج گیمرها</span>
      </div>
    </div>
  )
}

export default ShoppingPackage