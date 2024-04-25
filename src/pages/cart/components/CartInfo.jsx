import React from 'react'
import { useSelector } from 'react-redux'

function CartInfo() {
  const {items} = useSelector(state => state.cart)

  const subtotal = items.reduce((a, b) => a + (b.oldPrice * b.qty), 0)
  const discount = items.reduce((a, b) => a + ((b.oldPrice - b.price) * b.qty), 0)
  const total = items.reduce((a, b) => a + (b.price * b.qty), 0)

  return (
    <div className='cart-info'>
      <div className="cart-info__list">
        <div className="cart-info__row">
          <p className='cart-info__text'>Subtotal</p>
          <p className='cart-info__price'>{subtotal.toLocaleString()} UZS</p>
        </div>
        <div className="cart-info__row">
          <p className='cart-info__text'>Discount</p>
          <p className='cart-info__price_red'>{discount.toLocaleString()} UZS</p>
        </div>
        <div className="cart-info__row">
          <p className='cart-info__text_black'>Total</p>
          <p className='cart-info__price_black'>{total.toLocaleString()} UZS</p>
        </div>
        <button className="cart-info__button">Checkout</button>
      </div>
    </div>
  )
}

export default CartInfo