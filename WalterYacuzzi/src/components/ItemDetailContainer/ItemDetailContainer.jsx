import React from 'react'
import { useEffect, useState } from 'react'
import products from '../../assets/MOCK_DATA.json'

const ItemDetailContainer = () => {

    const [product, setProducts] = useState(null)

    useEffect(() => {
        setProducts(products[0])
    }, [])


    return (
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer