import React from 'react'

const ProductItem = ({ product, index }) => {
  return (
    <div
      key={index}
      className='user-item'
      style={{ borderLeft: `8px solid pink` }}>
      <img
        className='user-image'
        src={product.image}
        alt='user' />
      <p>{product.product}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default ProductItem;
