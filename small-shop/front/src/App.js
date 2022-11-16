import React, { useState } from 'react';
import { post } from './plugins/http';
import AddProduct from './components/add-product';
import AllProducts from './components/all-products';
import Cart from './components/cart';
import './styles.css';

function App() {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  async function send(product, image, price) {
    const productData = {
      product, image, price
    };
    const data = await post("addProduct", productData);
    setProducts(data);
  }

  return (
    <div className='d-flex f-direction'>
      <div className='d-flex j-btw'>
        <h3>shop example</h3>
        <button className='button' onClick={() => setShowCart(true)} type='button' >show cart</button>

      </div>
      <AddProduct send={send} />

      <AllProducts products={products} setProducts={setProducts} cart={cart} setCart={setCart} />

      {
        showCart && <Cart setShowCart={setShowCart} cart={cart} />
      }

    </div >
  );
}

export default App;
