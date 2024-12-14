import React from 'react'
import Story from '../../Component/Storys/Storys'
import TrendSlider from '../../Component/TrendSlider/TrendSlider'
import PopularCategories from '../../Component/PopularCategories/PopularCategories'
import NewProduct from '../../Component/NewProduct/NewProduct'
import Bestsellers from '../../Component/Bestsellers/Bestsellers'
import Mobile from '../../Component/Mobile/Mobile'
import Laptop from '../../Component/Laptop/Laptop'
import Amazing from '../../Component/Amazing/Amazing'
import ApprovedProducts from '../../Component/ApprovedProducts/ApprovedProducts'

function Home() {
  return (
    <main className=''>
      <Story />
      <TrendSlider />
      <PopularCategories />
      <NewProduct />
      <Mobile />
      <Bestsellers />
      <Amazing />
      <ApprovedProducts />
      <Laptop />
    </main>
  )
}

export default Home