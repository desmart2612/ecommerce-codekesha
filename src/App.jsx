import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home.jsx';
import Shop from './components/pages/Shop.jsx';
import Products from './components/pages/Products.jsx';
import Elements from './components/pages/Elements.jsx';
import Blog from './components/pages/Blog.jsx';
import Pages from './components/pages/Pages.jsx';
import Navbar from './components/base/Navbar.jsx';
import Footer from './components/base/Footer.jsx';
import FloatingBtn from './components/base/FloatingBtn.jsx';
import Error404 from './components/base/Error404.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <FloatingBtn />
      <Footer />
    </>
  )
}

export default App
