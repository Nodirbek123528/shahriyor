import React from 'react'
import { useDispatch } from 'react-redux'
import { removeOrder } from '../../../store/slices/orders'

function OrdersProduct({ product }) {
  // const { id, title, mainImage, model, price } = product
  const dispatch = useDispatch()
console.log(product);
  const handleRemove = () => {
    dispatch(removeOrder(product.id))
  }


  return (
    <div className='ordres-product'>
      <div className="ordres-product__image">
        <img src={product.mainImage} alt="" />
      </div>
      <div className="ordres-product__content">
        <div className="ordres-product__row">
          <p className="ordres-product__title">{product.title}</p>
          <p className='ordres-product__price'>{product.price} UZS</p>
        </div>
        <div className="ordres-product__row">
          <p className='ordres-product__subtitle'>{product.model}</p>
        </div>
        <div className="ordres-product__row">
          <button className="ordres-product__button" onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default OrdersProduct