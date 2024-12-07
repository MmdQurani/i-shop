import React from 'react'
import { Card } from 'react-bootstrap'
import './BoxCards.css'
import 'swiper/css'
import BtnCards from '../BtnCards/BtnCards'

function BoxCards(prop) {
  return (
    <>
      <Card style={{ width: '100%', height: 'max-content' }}>
        <Card.Img variant="top" src={prop.src} style={{ width: '100%' }} />
        <Card.Body>
          <Card.Title>{prop.title}</Card.Title>
          <Card.Text>
            {prop.subTitle}
          </Card.Text>
          <Card.Text>
            {prop.price}
          </Card.Text>
          <BtnCards />
        </Card.Body>
      </Card>
    </>
  )
}

export default BoxCards