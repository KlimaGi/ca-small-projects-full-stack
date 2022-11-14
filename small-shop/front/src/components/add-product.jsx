import React, { useRef } from 'react'

const AddProduct = ({ send }) => {
  const productNameRef = useRef();
  const productImageRef = useRef();
  const priceRef = useRef();

  const addProduct = () => {
    const productData = {
      product: productNameRef.current.value,
      image: productImageRef.current.value,
      price: priceRef.current.value
    };
    send(productData);

    productNameRef.current.value = '';
    productImageRef.current.value = '';
    priceRef.current.value = '';
  }

  return (
    <div className='container'>

      <input
        ref={productNameRef}
        type='text'
        placeholder='enter product name'
        className='input'
      />

      <input
        ref={productImageRef}
        type='text'
        placeholder='product image url'
        className='input'
      />

      <input
        ref={priceRef}
        type='text'
        placeholder='product price'
        className='input'
      />

      <button onClick={addProduct} className="button">send data</button>
    </div>

  )
}

export default AddProduct;
