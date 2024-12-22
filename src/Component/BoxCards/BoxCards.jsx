import React from 'react'
import { Card } from 'react-bootstrap'
import './BoxCards.css'
import 'swiper/css'
// import BtnCards from '../BtnCards/BtnCards'
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
            <PriceCard price='55,000,000' />

            <BtnCards />
          </div>

        </Card.Body>
      </Card>
    </>
  )
}

export function PriceCard(prop) {
  
  return (
    <span className={`fs-price-card ${prop.dis} text-color-main`} dir='rtl'>
      {prop.price} <span style={{ fontSize: '8px' }}>تومان</span>
    </span>
  )
}

export function BtnCards () {
  return(
    <Link to='/shop' className='btn bg-btn border-0 py-2 px-2 fs-btn-card'>افزودن به سبد خرید</Link>
  )
}

export default BoxCards