import React from 'react'
import HeadSection from '../HeadSection/HeadSection'
import NavigationBtnCard from '../NavigationBtnCard/NavigationBtnCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules';
import { Card , Button } from 'react-bootstrap'
import 'swiper/css';

function NewProducts() {
  return (

    <div>
      <HeadSection moreItems={true} link='/' title='محصولات جدید' />

      <div className='parent-swiper-box'>
        <div className='h-100 mx-swiper-box'>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '#NewProducts-next',
              prevEl: '#NewProducts-prev'
            }}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              100: {
                slidesPerView: 1.2, // یک اسلاید برای صفحه نمایش کوچک  
              },
              410: {
                slidesPerView: 1.3, // یک اسلاید برای صفحه نمایش کوچک  
              },
              540: {
                slidesPerView: 1.5, // یک اسلاید برای صفحه نمایش کوچک  
              },
              800: {
                slidesPerView: 2.2, // یک اسلاید برای صفحه نمایش کوچک  
              },
              992: {
                slidesPerView: 2.7, // سه اسلاید برای صفحه نمایش بزرگ  
              },
              1024: {
                slidesPerView: 3, // سه اسلاید برای صفحه نمایش بزرگ  
              },
              1400: {
                slidesPerView: 4, // سه اسلاید برای صفحه نمایش بزرگ  
              }
            }}
            style={{ height: '25rem', overflow: 'hidden' }}
            className='px-2'
          >

            <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
              <Link to='/' className='text-decoration-none'>

                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>

              </Link>
            </SwiperSlide>

            <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
              <Link to='/' className='text-decoration-none'>

                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>

              </Link>
            </SwiperSlide>

            <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
              <Link to='/' className='text-decoration-none'>

                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>

              </Link>
            </SwiperSlide>

            <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
              <Link to='/' className='text-decoration-none'>

                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>

              </Link>
            </SwiperSlide>

            <SwiperSlide className=' bg-main rounded-3 PopularCategories-slider-box-shadow my-auto'>
              <Link to='/' className='text-decoration-none'>

                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>

              </Link>
            </SwiperSlide>

          </Swiper>
        </div>

        <NavigationBtnCard prev='NewProducts-prev' next='NewProducts-next' />

      </div>
    </div>



  )
}

export default NewProducts