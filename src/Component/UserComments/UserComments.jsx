import React from 'react'

function UserComments() {
  return (
    <div className='UserComments bg-main product-content px-4 py-3 d-flex flex-column justify-content-center align-items-center' dir='rtl'>
      <div className="w-100 h-100 d-flex flex-row justify-content-between align-items-center py-5 px-2">
        <span className='title-1-review-product text-color-content fs-5 mt-2'>نظرات کاربران</span>
        <span className='title-1-review-product sub-text-color-main fs-6  mt-2'>بدون دیدگاه</span>
      </div>
      <hr className='w-100' style={{color:'var(--subtext-color-main)'}}></hr>
      <div className='w-100 h-100 d-flex justify-content-center align-items-center py-4'>
        <div className="px-3 py-1 rounded-2 bg-color-1 lh-32 text-center text-color-main fs-price-card">
          <span>برای ثبت دیدگاه، باید محصول مورد نظر را خریداری کرده باشید</span>
        </div>
      </div>
    </div>
  )
}

export default UserComments