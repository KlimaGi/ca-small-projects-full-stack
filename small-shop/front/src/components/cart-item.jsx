import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className='cart-item'>
      <div>
        {item.image}
      </div>
      <div>
        {item.product}
      </div>
      <div>
        {item.price} $
      </div>
    </div>
  )
}

export default CartItem;