import { useState, useEffect } from 'react'
import data from '../data/Products.js'
import Card from './card.jsx'
import ProductModal from './ProductModal'

function ProductsPanel() {

  const [activeProductId, setActiveProductId] = useState(null);

  const handleShowModal = (productId) => {
    setActiveProductId(productId);
  };

  const handleCloseModal = () => {
    setActiveProductId(null);
  };

  useEffect(() => {
    if (activeProductId !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeProductId]);

  return (
    <div className="productsGrid">
      {data.products.map((product) => (
        <Card key={product.id} product={product} open={() => handleShowModal(product.id)} />
      ))}

      {activeProductId !== null && (
        <ProductModal
          product={data.products.find(p => p.id === activeProductId)}
          visible={true}
          close={handleCloseModal}
        />
      )}
    </div>

  )
}

export default ProductsPanel