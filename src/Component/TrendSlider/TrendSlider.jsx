import React, { useState, useEffect } from 'react'
import 'swiper/css';
import './TrendSlider.css'
import TrendCard from './TrendCard/TrendCard';
import TrendCardSlider from './TrendCardSlider/TrendCardSlider';
import BannerSlider from '../BannerSlider/BannerSlider'

function TrendSlider() {

  const [trendSrc, setTrendSrc] = useState([]);
  const [imgTrendCard, setImgTrendCard] = useState([
    {id : 1 , src: 'assets/img/TrendCard/cat3-1.jpg' },
    {id : 2 , src: 'assets/img/TrendCard/cat6-1.jpg' },
    {id : 3 , src: 'assets/img/TrendCard/headphone-1.jpg' },
  ])

  const resizeHandler = () => {
    if (window.innerWidth < 992) {
      setTrendSrc(
        [
          { id: 2, src: 'assets/img/Trend/mob4-1.jpg' },
          { id: 3, src: 'assets/img/Trend/mob5-1.jpg' }
        ]
      );
    } else {
      setTrendSrc(
        [
          { id: 1, src: 'assets/img/Trend/newSlider2-1.jpg' },
          { id: 2, src: 'assets/img/Trend/newSlider3-1.jpg' },
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

      <div className='row'>

        <div className='col-12'>
          <BannerSlider items={trendSrc} />
        </div>

        <div className="col-12 d-flex justify-content-center p-0">

          <div className="row w-100 bg-main justify-content-center align-items-center row-gap-3" dir='rtl'>

            <div className="col-12 col-lg-5 trend-card-slider-box-st" style={{overflow:'hidden'}}>
              <div className='h-trend-card-slider-box' style={{width:'100%'}}>
                <TrendCardSlider />
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className='d-flex justify-content-between align-items-center flex-row'>
                {imgTrendCard.map(item =>
                  <TrendCard key={item.id} imgLink={item} />
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default TrendSlider