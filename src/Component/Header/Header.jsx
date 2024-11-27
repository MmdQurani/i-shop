import React from 'react'
import Topbar from './Topbar/Topbar'
import Navbar from './Navbar/Navbar'
import { Container } from 'react-bootstrap'
import './Header.css'

function Header() {
  return (
    <header className='headerSize bg-main'>
      <Container className='p-0 d-flex flex-column h-100'>
        <Topbar />
        <Navbar />
      </Container>
    </header>
  )
}

export default Header