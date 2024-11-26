import React , { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import RoutesValue from './Routes'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import './App.css'

function App() {
  const setRoutes = useRoutes(RoutesValue);

  return (
    <>
    <Header></Header>
    {setRoutes}
    <Footer></Footer>
    </>
  )
}

export default App
