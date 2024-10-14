import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount';
import Styles from "./itemDetail.module.css"


const ItemDetail = ({product}) => {
    
    return (
        <div className={Styles.cardContainer}>
            <img src={product.pictureUrl}/>
            <h1>{product.tittle}</h1>
            <span>{product.description}</span>
            <ItemCount stock={10} initial={1} onAdd={(cantidad) =>
            console.log('cantidad agregada', cantidad)} />
        </div>
    )
}

export default ItemDetail