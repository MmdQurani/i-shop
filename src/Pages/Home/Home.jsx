import React from 'react'
import Story from '../../Component/Storys/Storys'
import TrendSlider from '../../Component/TrendSlider/TrendSlider'
import PopularCategories from '../../Component/PopularCategories/PopularCategories'
import NewProduct from '../../Component/NewProduct/NewProduct'
import Bestsellers from '../../Component/Bestsellers/Bestsellers'

function Home() {
  return (
    <main className=''>
      <Story />
      <TrendSlider />
      <PopularCategories />
      <NewProduct />
      <Bestsellers />
    </main>
  )
}

export default Home