import React from 'react'
import data from '../data/Products.js'
import Card from './card.jsx'

function ProductsPanel() {
  return (
    <div className="productsGrid">
      {data.products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductsPanel