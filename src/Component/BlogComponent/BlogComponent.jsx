import React from 'react'
import './BlogComponent.css'
import HeadSection from '../HeadSection/HeadSection'

function BlogComponent() {
  return (
    <>
    <HeadSection title='وبلاگ' moreItems={true}/>
      <div className='BlogComponent mt-4 py-2 d-flex justify-content-center' style={{height:'max-content'}}>
        <div className="row w-100" dir='rtl'>
          <div className="col-xl-7 col-12">
            <div className='banner-blog-main position-relative w-100 h-100'>
              <img src="./assets/img/BlogImg/pci1.png" style={{height:'100%' , width:'100%' , borderRadius:'1rem'}} alt="" />
              <div style={{position:'absolute' , zIndex:100}} className='w-100 h-100 top-0 d-flex flex-column justify-content-end row-gap-3 px-4'>
                <span className='text-light' >دلایلی برای خرید گوشی ناتینگ فون یک</span>
                <div className='d-flex flex-row w-100 text-light column-gap-5 mb-4'>
                  <span>مدیر سایت</span>
                  <span dir='rtl'>06مهر1403</span>
                  <span>1</span>
                  <span>15 دقیقه</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-12 bg-danger">one</div>
        </div>
      </div>
    </>
  )
}

export default BlogComponent