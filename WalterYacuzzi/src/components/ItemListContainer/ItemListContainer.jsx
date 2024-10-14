import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import mockProducts from "../../assets/MOCK_DATA.json"
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)




    const { categoryId } = useParams()


    useEffect(() => {

        const promise = new Promise((res) => {
            setLoading(true)
            setTimeout(() => {
                res(mockProducts)
            }, 2000)
        })

        promise
            .then((products) => {
                let productsFiltered
                if (categoryId) {
                    productsFiltered = mockProducts.filter(product =>
                        product.category === categoryId)
                } else {
                    productsFiltered = mockProducts
                }
                setProducts(productsFiltered)
                setLoading(false)
                
            })
            .catch((error) => {
                console.log(error);

            })

    }, [categoryId])







    return loading ? (
        <div>
            <h1>{greeting}</h1>
            <h2>Loading ... </h2>
        </div>
    ) : (
        <div>
            <ItemList products={products} />
        </div>
    );

        
            
        
    

}

export default ItemListContainer

