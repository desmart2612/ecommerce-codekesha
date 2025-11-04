// import { useState } from 'react'
import './App.css'
import FilterTab from './components/FilterTab.jsx'
import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'
import ProductsPanel from './components/ProductsPanel.jsx'
import Footer from './components/Footer.jsx'

function App() {  
  return (
    <>
      <Navbar />
      <HeroSection />
      <FilterTab />
      <ProductsPanel />
      <Footer />
    </>
  )
}

export default App
