import React from 'react'
import './PopularCategories.css'
import HeadSection from '../HeadSection/HeadSection'

function PopularCategories() {
  return (
    <div>
      <HeadSection moreItems={true} title={`دسته بندی های محبوب`} link='/' />
    </div>
  )
}

export default PopularCategories