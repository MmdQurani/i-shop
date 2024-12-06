import React from 'react'
import Story from '../../Component/Storys/Storys'
import TrendSlider from '../../Component/TrendSlider/TrendSlider'
import ProductSliderMain from '../../Component/ProductSliderMain/ProductSliderMain'

function Home() {
  return (
    <main className=''>
      <Story />
      <TrendSlider />
      <ProductSliderMain />
    </main>
  )
}

export default Home