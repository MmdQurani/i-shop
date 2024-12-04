import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import './TrendSlider.css'
import { Link } from 'react-router-dom';
import TrendCard from './TrendCard/TrendCard';

function TrendSlider() {

  const [trendSrc, setTrendSrc] = useState([]);
  const [imgTrendCard , setImgTrendCard] = useState([
    {src : './public/assets/img/TrendCard/cat3-1.jpg'},
    {src : './public/assets/img/TrendCard/cat6-1.jpg'},
    {src : './public/assets/img/TrendCard/headphone-1.jpg'},
  ])

  const resizeHandler = () => {
    if (window.innerWidth < 992) {
      setTrendSrc(
        [
          { id: 1, src: './public/assets/img/Trend/mob4-1.jpg' },
          { id: 2, src: './public/assets/img/Trend/newSlider3-1.jpg' },
          { id: 3, src: './public/assets/img/Trend/mob4-1.jpg' }
        ]
      );
    } else {
      setTrendSrc(
        [
          { id: 1, src: './public/assets/img/Trend/newSlider2-1.jpg' },
          { id: 2, src: './public/assets/img/Trend/newSlider3-1.jpg' },
          { id: 3, src: './public/assets/img/Trend/newSlider4-1.jpg' }
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
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            navigation
            loop={true}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style={{ height: 'max-content' }}
            className='py-3'
          >

            {trendSrc.map(item =>
              <SwiperSlide key={item.id} >
                <Link to='/shop'>
                  <img className='trend-img-st' src={item.src} alt="" />
                </Link>
              </SwiperSlide>
            )}

          </Swiper>
        </div>

        <div className="col-12 d-flex justify-content-center">

          <div className="row w-100" dir='rtl'>
            <div className="col-12 col-lg-5 bg-danger">hello world</div>
            <div className="col-12 col-lg-7">
              <div className='d-flex justify-content-between align-items-center flex-row'>
                {imgTrendCard.map(item => 
                  <TrendCard imgLink={item} />
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