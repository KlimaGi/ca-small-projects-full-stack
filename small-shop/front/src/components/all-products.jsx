import React from 'react';
import ProductItem from './product-item';

const AllProducts = ({ products }) => {
  console.log('all-products', products);
  return (
    <div className='card-container'>
      {
        products && products.map((product) => <ProductItem product={product} />)
      }
    </div>
  )
}

export default AllProducts;
