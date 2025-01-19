import React, { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import RoutesValue from './Routes'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import './App.css'
import ScrollToFirst from './Component/ScrollToFirst/ScrollToFirst'

function App() {
  const setRoutes = useRoutes(RoutesValue);


  return (
    <>
      <ScrollToFirst />
      <Header></Header>
      <main className='container'>
        {setRoutes}
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
