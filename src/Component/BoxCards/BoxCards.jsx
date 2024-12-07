import React from 'react'
import { Card } from 'react-bootstrap'
import './BoxCards.css'
import 'swiper/css'
import BtnCards from '../BtnCards/BtnCards'
import { Link } from 'react-router-dom'

function BoxCards(prop) {
  return (
    <>
      <Card style={{ width: '100%', height: '95%' }}>
        <div style={{ width: '150px' }} className='py-4 mx-auto'>
          <Card.Img variant="top" src={prop.src} style={{ width: '100%' }} />
        </div>
        <Card.Body>

          <Link to='/shop' className='text-decoration-none'>
            <div className='d-flex flex-column justify-content-center align-items-start'>
              <span className='fs-6 text-color-main lh-lg' dir='rtl'>{prop.title}</span>
            </div>
          </Link>

          <div className='w-100 d-flex justify-content-between align-items-center'>
            <span className='fs-price-card text-color-main' dir='rtl'>
              {prop.price} <span style={{ fontSize: '10px' }}>تومان</span>
            </span>

            <BtnCards />
          </div>

        </Card.Body>
      </Card>
    </>
  )
}

export default BoxCards