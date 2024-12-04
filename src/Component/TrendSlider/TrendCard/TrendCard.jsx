import React from 'react'
import { Link } from 'react-router-dom'
import './TrendCard.css'

function TrendCard(prop) {
  return (
    <>
      <div style={{ width: '30%' }}>
        <Link to='/'>
          <img src={prop.imgLink.src} className='img-trend-st' alt="" />
        </Link>
      </div>
    </>
  )
}

export default TrendCard