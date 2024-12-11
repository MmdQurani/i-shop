import React from 'react'
import { Link } from 'react-router-dom'

function BoxBannerNewProduct(prop) {
  return (
    <>
      <div className="col-lg-6 col-md-6 col-12 d-flex  align-items-center justify-content-center">
        <div className='box-banner-newproduct'>
          <Link to={`${prop.link}`}>
            <img src={`${prop.src}`} className='img-banner-newproduct' alt="" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default BoxBannerNewProduct