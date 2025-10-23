// import { useState } from 'react'
import './App.css'
import FilterTab from './components/FilterTab.jsx'
import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'
import ProductsPanel from './components/ProductsPanel.jsx'

function App() {  
  return (
    <>
      <Navbar />
      <HeroSection />
      <FilterTab />
      <ProductsPanel />      
    </>
  )
}

export default App
