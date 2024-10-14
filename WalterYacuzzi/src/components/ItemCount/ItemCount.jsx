import React, { useState } from 'react'
import './itemCount.css'

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial)

    const increment = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const decrement = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
            <div className='container'>
                <div className='buttonContainer'>
                    <button onClick={decrement}>-</button>
                    <h5 className='number'>{cantidad}</h5>
                    <button onClick={increment}>+</button>
                </div>
                <div className='containerConfirm'>
                    <button className='buttonConfirm' onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar</button>
                </div>
            </div>
        </>
    )
}
