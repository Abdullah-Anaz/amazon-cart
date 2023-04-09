import React from 'react'
import './CartTotal.css'
import { NumericFormat } from 'react-number-format'

function CartTotal( {items} ) {
  const getTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.price * item.quantity;
    })
    return totalPrice;
  }

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    items.forEach((item) => {
      totalQuantity += parseInt(item.quantity, 10);
    })
    return totalQuantity;
  }

  return (
    <div className='CartTotal'>
      <h3>Subtotal({getTotalQuantity()} items): 
        <span className='CartTotal-price'>
          <NumericFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
        </span>
      </h3>
      <button>
        Proceed to checkout
      </button>
    </div>
  )
}

export default CartTotal