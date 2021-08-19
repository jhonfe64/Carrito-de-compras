/*

El contexto AlLproduts almacena la lista completa de produtos despues de hacer el fetch, en /components/Results
el estado allProducts se inicia como un array vacio, al actualizarse recibe un array de objetos jjjjjj

*/


import React, {useState, createContext} from 'react';

const AllProductsContext = createContext();


function AllProductsProvider({children}) {

    const [allProducts, setAllProducts] = useState([])

    const updateAllProducts = (allProducts) => {
        console.log("estado actual del carrito desde el contexto===>", allProducts)
        setAllProducts(allProducts);
    }


    return (
        <AllProductsContext.Provider value={{allProducts, updateAllProducts}}>
            {children}
        </AllProductsContext.Provider>
    );
    
}



export {AllProductsContext, AllProductsProvider}
