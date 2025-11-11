import React from 'react'
import FilterTab from '../shop/FilterTab.jsx'
import HeroSection from '../shop/HeroSection.jsx'
import Navbar from '../base/Navbar.jsx'
import ProductsPanel from '../shop/ProductsPanel.jsx'
import Footer from '../base/Footer.jsx'
import FloatingBtn from '../base/FloatingBtn.jsx'

function Shop() {
  return (
    <>
      <HeroSection />
      <FilterTab />
      <ProductsPanel />      
    </>
  )
}

export default Shop
