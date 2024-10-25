import React from 'react'
import { useEffect, useState } from 'react'
import mockProducts from '../../assets/MOCK_DATA.json'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProducts] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        
        const product = mockProducts.find(productToFind => productToFind.id === Number(id))

        setProducts(product)
        
        
    }, [id])


    return ( product && <ItemDetail product={product}/>
        
    )
}

export default ItemDetailContainer