import React from 'react'
import Story from '../../Component/Storys/Storys'
import TrendSlider from '../../Component/TrendSlider/TrendSlider'
import PopularCategories from '../../Component/PopularCategories/PopularCategories'

function Home() {
  return (
    <main className=''>
      <Story />
      <TrendSlider />
      <PopularCategories />
    </main>
  )
}

export default Home