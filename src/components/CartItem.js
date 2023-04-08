import React from 'react'
import './CartItem.css'

function CartItem() {
  return (
    <div className='CartItem'>
        <div className='CartItem-img'>
            <img src='https://cdn.eraspace.com/media/catalog/product/i/p/ipad_pro_gen_6_12_9_inci_wi-fi_cellular_space_grey_1_8.jpg' alt=''/>
        </div>
        <div className='CartItem-info'>
            <div className='info-title'>
                <h2>Apple Ipad Pro</h2>
            </div>
            <div className='info-stock'>
                In stock
            </div>
            <div className='item-action'>
                <div className='item-quantity'>
                    <select>
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
            $769.20
        </div>
    </div>
  )
}

export default CartItem