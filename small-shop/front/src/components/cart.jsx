import React from 'react'

const Cart = ({ setShowCart }) => {
  return (
    <div className='cart-back'>
      <div className='cart'>

        <button type='button' onClick={() => setShowCart(false)}>x</button>
      </div>
    </div>
  )
}

export default Cart;
