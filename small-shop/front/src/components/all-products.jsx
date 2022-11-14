import React from 'react';
import ProductItem from './product-item';

const AllProducts = ({ products, setProducts }) => {

  console.log('all-products', products);

  return (
    <div className='card-container'>
      {
        products && products.map((product, index) => <ProductItem key={index} product={product} index={index} setProducts={setProducts} />)
      }
    </div>
  )
}

export default AllProducts;
