import React from 'react';
import CartItem from './cart-item';

const Cart = ({ setShowCart, cart }) => {
  return (
    <div className='cart-back'>
      <div className='cart'>
        <div className='d-flex j-btw'>
          <div></div>
          <button className='self-a-end' type='button' onClick={() => setShowCart(false)}>x</button>
        </div>


        <div>
          {
            cart.map((item, i) => <CartItem key={i} item={item} />)
          }
        </div>
      </div>


    </div>
  )
}

export default Cart;
