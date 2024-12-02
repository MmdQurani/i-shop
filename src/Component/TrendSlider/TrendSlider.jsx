import React , {useState , useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import './TrendSlider.css'
import { Link } from 'react-router-dom';

function TrendSlider() {

  const [trendSrc , setTrendSrc] = useState('./public/assets/img/Trend/newSlider3-1.jpg');

  const resizeHandler = () => {
    if(window.innerWidth < 990) {
      setTrendSrc('./public/assets/img/Trend/mob4-1.jpg');
    }else {
      setTrendSrc('./public/assets/img/Trend/newSlider3-1.jpg');
    }
  }

  useEffect(() => {

    resizeHandler()

    window.addEventListener('resize' , resizeHandler);
  })

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        // slidesPerView={8}
        navigation
        loop={false}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{ height: 'max-content' }}
        className='py-3'
      >

        <SwiperSlide style={{ height: '100%' }} >
          <Link to='/shop'>
            <img className='trend-img-st' src={trendSrc} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/shop'>
            <img className='trend-img-st' src={trendSrc} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/shop'>
            <img className='trend-img-st' src={trendSrc} alt="" />
          </Link>
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default TrendSlider