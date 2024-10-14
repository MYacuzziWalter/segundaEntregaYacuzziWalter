import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import mockProducts from "../../assets/MOCK_DATA.json"
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {

    const [products, setProducts] = useState([])


    

    const {categoryId} = useParams()
    

    useEffect(() => {
        let productsFiltered
        if (categoryId){
            productsFiltered = mockProducts.filter(product => 
                product.category === categoryId)
        } else {
            productsFiltered = mockProducts
        }
        setProducts(productsFiltered)
        
    }, [categoryId])
    
    





    return <ItemList products={products} />
} 

export default ItemListContainer



// import React, { useState, useEffect } from "react"
// import mockProducts from "../../assets/MOCK_DATA.json";
// import ItemList from "../ItemList/ItemList"
// import { useParams } from "react-router-dom"

// const ItemListContainer = ({ greeting }) => {

//     const [products, setProducts] = useState([])
//     const [filteredProducts, setFilteredProducts] = useState([])
//     const { categoryId } = useParams()
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         const viewProducts = new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(productsTienda)
//             }, 2000)
//         })

//         viewProducts
//             .then((response) => {
//                 setProducts(response)
//                 if (categoryId) {
//                     const productsFiltered = response.filter(product => product.category === categoryId)
//                     setFilteredProducts(productsFiltered.length > 0 ? productsFiltered : response)
//                 } else {
//                     setFilteredProducts(response)
//                 }
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//             .finally(() => {
//                 setLoading(false) // La carga ha terminado
//             });
//     }, [categoryId])

//     return loading ? (
//         <div>
//             <h2>loading...</h2>
//             <h1>{greeting}</h1>
//         </div>
//     ) : (
//         <div>
//             <ItemList products={filteredProducts}/>
//         </div>
//     )
// }

// export default ItemListContainer;