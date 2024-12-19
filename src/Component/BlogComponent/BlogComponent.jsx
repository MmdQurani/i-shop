import React from 'react'
import HeadSection from '../HeadSection/HeadSection'

function BlogComponent() {
  return (
    <>
    <HeadSection title='وبلاگ' moreItems={true}/>
      <div className='BlogComponent mt-4'>
        <div className="row">
          <div className="col">one</div>
          <div className="col">two</div>
        </div>
      </div>
    </>
  )
}

export default BlogComponent