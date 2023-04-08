import React from 'react'
import './CartItem.css'

function CartItem( {item} ) {
  return (
    <div className='CartItem'>
        <div className='CartItem-img'>
            <img src={process.env.PUBLIC_URL + '/items/' + item.image} alt=''/>
        </div>
        <div className='CartItem-info'>
            <div className='info-title'>
                <h2>{item.title}</h2>
            </div>
            <div className='info-stock'>
                {item.stock}
            </div>
            <div className='item-action'>
                <div className='item-quantity'>
                    <select value = {item.quantity}>
                        <option value="1">Qty: 1</option>
                        <option value="2">Qty: 2</option>
                        <option value="3">Qty: 3</option>
                    </select>
                </div>
                <div className='item-action-divider'>|</div>
                <div className='item-delete'>
                    Delete
                </div>
            </div>
        </div>
        <div className='CartItem-price'>
            {item.price}
        </div>
    </div>
  )
}

export default CartItem