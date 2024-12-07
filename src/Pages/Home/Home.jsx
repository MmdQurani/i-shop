import React from 'react'
import Story from '../../Component/Storys/Storys'
import TrendSlider from '../../Component/TrendSlider/TrendSlider'
import PopularCategories from '../../Component/PopularCategories/PopularCategories'
import NewProducts from '../../Component/NewProducts/NewProducts'

function Home() {
  return (
    <main className=''>
      <Story />
      <TrendSlider />
      <PopularCategories />
      <NewProducts />
    </main>
  )
}

export default Home