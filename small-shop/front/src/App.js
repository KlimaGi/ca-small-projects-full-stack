import React, { useState } from 'react';
import AddProduct from './components/add-product';
import AllProducts from './components/all-products';
import './styles.css';

function App() {


  const [products, setProducts] = useState([]);


  // async function handleDelete(name) {
  //   const res = await fetch('http://localhost:4000/user/' + name, { method: 'DELETE' });
  //   const data = await res.json();
  //   setNames(data.names);
  //   console.log('data deleted', data);
  // }

  async function send(product, image, price) {
    const productData = {
      product, image, price
    }
    console.log('productData', productData);
    const options = {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(productData)
    }

    const res = await fetch("http://localhost:4000/addProduct", options);
    const data = await res.json();

    setProducts(data);
    console.log('products', products);

  }

  return (
    <div className='d-flex f-direction'>
      <h3>shop example</h3>

      <AddProduct send={send} />


      <AllProducts products={products} />




    </div>
  );
}

export default App;
