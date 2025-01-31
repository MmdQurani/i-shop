import React, { useState } from 'react'
import './SampleImgProduct.css'
import InnerImageZoom from 'react-inner-image-zoom'

function SampleImgProduct() {
  const [samplesImg , setSamplesImg] = useState('../assets/img/Products/7.jpg')

  return (
    <>
      <div className='sample-img-product bg-main d-flex flex-column row-gap-4 justify-content-center align-items-center w-100 h-100'>
        <InnerImageZoom
          src={samplesImg}
          zoomSrc={samplesImg}
          zoomType="hover"
          zoomPreload={true}
          zoomScale={1.8}
        />

        <div className='row Subsamples-img-parent column-gap-4 row-gap-3 w-100 justify-content-center'>
          <SubsamplesImg ImgSrc='../assets/img/Products/7.jpg' setSample={setSamplesImg} />
          <SubsamplesImg ImgSrc='../assets/img/Products/9.jpg' setSample={setSamplesImg} />
          <SubsamplesImg ImgSrc='../assets/img/Products/7.jpg' setSample={setSamplesImg} />
          <SubsamplesImg ImgSrc='../assets/img/Products/9.jpg' setSample={setSamplesImg} />
          <SubsamplesImg ImgSrc='../assets/img/Products/7.jpg' setSample={setSamplesImg} />
          <SubsamplesImg ImgSrc='../assets/img/Products/9.jpg' setSample={setSamplesImg} />
        </div>

      </div>
    </>
  )
}

export function SubsamplesImg(prop) {
  return (
    <>
      <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-2 col-sm-3 col-3 p-0'>
        <div className='Subsamples-img w-100 h-100 p-1 rounded-2' onClick={() => prop.setSample(prop.ImgSrc)}>
          <img src={prop.ImgSrc} className='w-100' alt="" />
        </div>
      </div>
    </>
  )
}

export default SampleImgProduct