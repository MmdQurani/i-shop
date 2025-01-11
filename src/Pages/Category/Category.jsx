import React from 'react'
import ArchiveContentTitle from '../../Component/ArchiveContentTitle/ArchiveContentTitle'
import SideRightCategory from '../../Component/SideRightCategory/SideRightCategory'

function Category() {
  return (
    <main className='Category bg-main'>
      <ArchiveContentTitle />

      <div className='content-category row' dir='rtl'>

        <div className="col-xxl-3 col-xl-4 col-lg-4 p-0 d-lg-flex d-none">
          <SideRightCategory />
        </div>
        <div className="col-xxl-9 col-xl-8 col-lg-8 col-12">
          <div className='bg-danger'>content</div>
        </div>

      </div>
    </main>
  )
}

export default Category