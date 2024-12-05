import React from 'react'
import Story from '../../Component/Storys/Storys'
import TrendSlider from '../../Component/TrendSlider/TrendSlider'
import HeadSection from '../../Component/HeadSection/HeadSection'

function Home() {
  return (
    <main className=''>
      <Story />
      <TrendSlider />
      <HeadSection moreItems={null} title={`دسته بندی های محبوب`} />
    </main>
  )
}

export default Home