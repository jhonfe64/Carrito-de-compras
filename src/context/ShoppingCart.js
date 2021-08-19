/*
El componente ShoppingCart recebe la lista de productos que el usuario envía al carrito, con las cantidades y los 
precios actualizados.

el estado cartproducts se inicializa con un array vacio, al actualizarlo recibe un array de objetos.

se actualiza desde /componets/ShoppingCart y desde  /components.productCard

*/

import React, {useState, createContext} from 'react';

const ShoppingCartContext = createContext();


function ShoppingCartProvider({children}) {
    const [cartproducts, setCardProducts] = useState([])


    //Funcion que actualiza el estado
    const updateCartProducts = (cartProducts) => {
        setCardProducts(cartProducts);
    }


    console.log("estado actual del carrito desde el contexto===>", cartproducts)


    return (
        <ShoppingCartContext.Provider value={{cartproducts, updateCartProducts}}>
            {children}
        </ShoppingCartContext.Provider>
    );
    
}

export {ShoppingCartContext, ShoppingCartProvider}
