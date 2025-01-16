import React, { useState, useEffect } from 'react'
import './Blogs.css'
import ArchiveContentTitle from '../../Component/ArchiveContentTitle/ArchiveContentTitle'
import BannerSlider from '../../Component/BannerSlider/BannerSlider'

function Blogs() {

  const [blogBanner, setBlogBanner] = useState([]);

  const resizeHandler = () => {
    if (window.innerWidth < 992) {
      setBlogBanner(
        [
          { id: 1, src: 'assets/img/BlogImg/mobo.png' },
          { id: 2, src: 'assets/img/BlogImg/mobo2.png' }
        ]
      );
    } else {
      setBlogBanner(
        [
          { id: 1, src: 'assets/img/BlogImg/s2.png' },
          { id: 2, src: 'assets/img/BlogImg/s3.png' },
          { id: 3, src: 'assets/img/BlogImg/s1.png' },
        ]
      );
    }
  }

  useEffect(() => {

    resizeHandler()

    window.addEventListener('resize', resizeHandler);
  }, [])

  return (
    <>
      <div className='Blogs-Content'>
        <ArchiveContentTitle pageName='مقاله ها' countItem='15 مقاله' />

        <div className="Blogs-Items w-100 h-100">

          <div className='row'>

            <div className='col-12'>
              <BannerSlider items={blogBanner} />
            </div>
            
          </div>

        </div>

      </div>
    </>
  )
}

export default Blogs