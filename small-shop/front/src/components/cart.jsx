import React from 'react';
import CartItem from './cart-item';

const Cart = ({ setShowCart, cart }) => {
  const sum = cart.reduce((acc, curr) => acc + Number(curr.price), 0);

  return (
    <div className='cart-back'>
      <div className='cart'>
        <div className='d-flex j-btw'>
          <div></div>
          <button type='button' onClick={() => setShowCart(false)}>x</button>
        </div>

        <div>
          {
            cart.map((item, i) => <CartItem key={i} item={item} />)
          }
        </div>

        <p className='text-end'><b>Total:</b> {sum} <b>$</b></p>
      </div>


    </div>
  )
}

export default Cart;
