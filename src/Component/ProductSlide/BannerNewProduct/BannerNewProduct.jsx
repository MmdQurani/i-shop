import React from 'react'
import BoxBannerNewProduct from './BoxBannerNewProduct/BoxBannerNewProduct'
import './BannerNewProduct.css'

function BannerNewProduct() {
  return (
    <>
      <div className='mt-3 w-100 d-flex justify-content-center' style={{ height: 'max-content' }}>
        <div className="row w-100">
          <BoxBannerNewProduct link='/' src='../assets/img/BannerNewProducts/2-1.jpg' />
          <BoxBannerNewProduct link='/' src='../assets/img/BannerNewProducts/3-1.jpg' />
          <BoxBannerNewProduct link='/' src='../assets/img/BannerNewProducts/4-1.jpg' />
          <BoxBannerNewProduct link='/' src='../assets/img/BannerNewProducts/2-1.jpg' />
        </div>
      </div>
    </>
  )
}

export default BannerNewProduct