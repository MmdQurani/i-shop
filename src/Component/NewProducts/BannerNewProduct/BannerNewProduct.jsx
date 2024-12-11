import React from 'react'
import { Link } from 'react-router-dom'

function BannerNewProduct() {
  return (
    <>
      <div className='mt-3 w-100 d-flex justify-content-center' style={{ height: 'max-content' }}>
        <div className="row w-100">
          <div className="col-lg-6 col-md-6 col-12 d-flex  align-items-center justify-content-center">
            <div style={{ width: '100%', height: '90%', borderRadius: '1rem', overflow: 'hidden' }}>
              <Link to='/'>
                <img src="./assets/img/BannerNewProducts/2-1.jpg" style={{ width: '100%', objectFit: 'cover', height: '100%' }} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex  align-items-center justify-content-center">
            <div style={{ width: '100%', height: '90%', borderRadius: '1rem', overflow: 'hidden' }}>
              <Link to='/'>
                <img src="./assets/img/BannerNewProducts/3-1.jpg" style={{ width: '100%', objectFit: 'cover', height: '100%' }} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex  align-items-center justify-content-center">
            <div style={{ width: '100%', height: '90%', borderRadius: '1rem', overflow: 'hidden' }}>
              <Link to='/'>
                <img src="./assets/img/BannerNewProducts/4-1.jpg" style={{ width: '100%', objectFit: 'cover', height: '100%' }} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex  align-items-center justify-content-center">
            <div style={{ width: '100%', height: '90%', borderRadius: '1rem', overflow: 'hidden' }}>
              <Link to='/'>
                <img src="./assets/img/BannerNewProducts/2-1.jpg" style={{ width: '100%', objectFit: 'cover', height: '100%' }} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerNewProduct