import React from 'react'

function Card({ product, open }) {
  return (
    <div className="productCard" onClick={open}>
      <img src={product.image} alt={product.name} className="productImage" />
      <div style={{padding: "10px"}}>
        <p className="productName">{product.name}</p>
        <p className="productPrice">{product.price}</p>
        <div className="productColors">
          {product.colors?.map((color) => (
            <span
              key={color.name}
              className="colorCircle"
              style={{ backgroundColor: color.hex }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
