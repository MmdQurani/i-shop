import React , { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import RoutesValue from './Routes'
import './App.css'

function App() {
  const setRoutes = useRoutes(RoutesValue);

  return (
    <>
    {setRoutes}
    </>
  )
}

export default App
