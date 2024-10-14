
import React from 'react'
import cart from '../../assets/shopping-cart.png'
import './Cart.css'

const CartWidget = () => {
    return (
    <div>
        <img src={cart} alt='cart' className='cartwidget' />
        <span>3</span>
    </div>
    )
}

export default CartWidget