import React from 'react';
import ProductItem from './product-item';

const AllProducts = ({ products, setProducts, cart, setCart }) => {

  console.log('all-products', products);

  return (
    <div className='card-container'>
      {
        products && products.map((product, index) => <ProductItem key={index}
          product={product}
          index={index}
          setProducts={setProducts}
          cart={cart}
          setCart={setCart} />)
      }
    </div>
  )
}

export default AllProducts;
