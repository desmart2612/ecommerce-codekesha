import { useState, useEffect } from 'react'
import data from '../../data/Products.js'
import Card from './Card.jsx'
import ProductModal from './ProductModal'
import Pagination from './Pagination.jsx'

function ProductsPanel() {

  const [activeProductId, setActiveProductId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 12;

  const startIndex = currentPage * productsPerPage;
  const paginatedProducts = data.products.slice(startIndex, startIndex + productsPerPage);


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
    <>
      <div className="productsGrid">
        {paginatedProducts.map((product) => (
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
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={Math.ceil(data.products.length / productsPerPage)}
      />
    </>
  )
}

export default ProductsPanel