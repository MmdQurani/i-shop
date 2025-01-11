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
import ShoppingPackage from '../../Component/ShoppingPackage/ShoppingPackage'
import BlogComponent from '../../Component/BlogComponent/BlogComponent'
import PopularBrands from '../../Component/PopularBrands/PopularBrands'

function Home() {
  return (
    <main className='Home bg-main'>
      <Story />
      <TrendSlider />
      <PopularCategories />
      <NewProduct />
      <Mobile />
      <Bestsellers />
      <Amazing />
      <ApprovedProducts />
      <Laptop />
      <ShoppingPackage />
      <BlogComponent />
      <PopularBrands />
    </main>
  )
}

export default Home