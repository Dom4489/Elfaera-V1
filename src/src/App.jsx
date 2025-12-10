import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import ProductInfo from './Pages/ProductInfo'
import './App.css'

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/product" element={<ProductInfo />} />
        </Routes>
      </Router>
  )
}

export default App
