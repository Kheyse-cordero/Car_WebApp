import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/user/Landing'
import Listing from './pages/user/listing'
import Order from './pages/user/order'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  )
}

export default App
