import React, { useState } from 'react'
import { createContext } from "react";


//1 crear el contexto
export const Cart = createContext()

// 2 crear el componente 
const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)

    const addCart = (product) => {
        let cartUpdated = [...cart]
        console.log(cartUpdated);
        cartUpdated.push(product)
        setCart(cartUpdated)
        setQuantity(cartUpdated)
    }

    return (
        <Cart.Provider value={{addCart, cart, quantity}}>{children}</Cart.Provider>
    )
}

export default CartProvider