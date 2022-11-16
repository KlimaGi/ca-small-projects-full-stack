import React from 'react';
import { get } from '../plugins/http';

const ProductItem = ({ product, index, setProducts, cart, setCart }) => {
  const removeProduct = async () => {
    const res = await get(`deleteProduct/${index}`);
    setProducts(res.productsData);
  }

  const addToCart = () => {
    const newCart = [...cart, product];
    setCart(newCart);
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
      <p>{product.price} $</p>
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
