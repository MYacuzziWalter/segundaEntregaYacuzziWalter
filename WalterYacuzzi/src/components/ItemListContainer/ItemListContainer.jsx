import React, { useState, useEffect } from "react";
import productsTienda from "../../assets/MOCK_DATA.json"; 
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]); // Estado para todos los productos
    const [filteredProducts, setFilteredProducts] = useState([]); // Estado para los productos filtrados
    const { categoryId } = useParams(); // Obtenemos el parámetro de la categoría

    // Cargar productos simulando una llamada asíncrona con retardo de 2 segundos
    useEffect(() => {
        const viewProducts = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productsTienda); 
            }, 2000);
        });

        viewProducts
            .then((response) => {
                setProducts(response); // Guardamos todos los productos en el estado
                if (categoryId) {
                    // Filtrar por categoría si existe categoryId
                    const productsFiltered = response.filter(product => product.category === categoryId);
                    setFilteredProducts(productsFiltered.length > 0 ? productsFiltered : response); // Mostrar filtrados o todos si no hay coincidencias
                } else {
                    setFilteredProducts(response); // Si no hay categoría, mostramos todos los productos
                }
            })
            .catch((error) => {
                console.log(error); // Manejo de errores
            });
    }, [categoryId]); // Añadimos `categoryId` a las dependencias para que se ejecute al cambiar

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={filteredProducts} /> {/* Pasamos los productos filtrados */}
        </>
    );
};

export default ItemListContainer;