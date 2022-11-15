import React from 'react'

const ProductItem = ({ product, index, setProducts }) => {
  const removeProduct = async () => {
    const res = await fetch(`http://localhost:4000/deleteProduct/${index}`);
    const data = await res.json();
    setProducts(data.productsData);
  }

  const addToCart = () => {
    console.log('add');
  }

  return (
    <div
      key={index}
      className='user-item'
      style={{ borderLeft: `8px solid pink` }}>
      <img
        className='user-image'
        src={product.image}
        alt={product.product} />
      <p>{product.product}</p>
      <p>{product.price}</p>
      <div>
        <button
          onClick={removeProduct}
          type='button'
          className='button'
        >x</button>
        <button
          onClick={addToCart}
          type='button'
          className='button'
        >add to cart</button>
      </div>


    </div>
  )
}

export default ProductItem;
