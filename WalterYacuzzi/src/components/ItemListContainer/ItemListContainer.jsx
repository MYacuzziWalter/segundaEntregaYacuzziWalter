import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import mockProducts from "../../assets/MOCK_DATA.json"
import ItemList from '../ItemList/ItemList';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()


    useEffect(() => {
        ; (async () => {

            try {
                let productsFiltered = []
                if (categoryId) {
                    const q = query
                    (collection(db, "Products"), where("category", "==", categoryId)
                );

                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                        productsFiltered.push({ id: doc.id, ...doc.data() })
                    });
                } else {
                    const querySnapshot = await getDocs(collection(db, "Products"));
                    querySnapshot.forEach((doc) => {
                        console.log(`${doc.id} => ${doc.data()}`);
                        productsFiltered.push({ id: doc.id, ...doc.data() })
                    });
                }
                setProducts(productsFiltered)
            } catch (error) {
                console.log(error);

            }
        })()

    }, [categoryId])

    // const promise = new Promise((res) => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         res(mockProducts)
    //     }, 2000)
    // })
    // promise
    //     .then((products) => {
    //         if (categoryId) {
    //             productsFiltered = mockProducts.filter(product =>
    //                 product.category === categoryId)
    //         } else {
    //             productsFiltered = mockProducts
    //         }

    // setLoading(false)

    // })
    // .catch((error) => {
    //     console.log(error);

    // })








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

