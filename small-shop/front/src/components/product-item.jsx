import React from 'react'

const ProductItem = ({ product, index, setProducts }) => {
  const removeProduct = async () => {
    console.log('remove');
    console.log('index', index);
    const res = await fetch(`http://localhost:4000/deleteProduct/${index}/${product.product}`);
    const data = await res.json();
    console.log('data', data);
    setProducts(data.productsData);
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
      <button
        onClick={removeProduct}
        type='button'
        className='button'
      >x</button>
    </div>
  )
}

export default ProductItem;
