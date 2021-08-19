/*
El componente Show cart context se encarga de manejar cuando se abre o se cierra el carrito al hacer click sobre
el ícono en components/Header o sobre el el icono en componets/ShoppingCart

se inicializa como false, en el estado showHideCart.

se actualiza desde /componets/ShoppingCart y desde  /components.productCard

*/

import React, {useState, createContext} from 'react';

const ShowHideCartContext = createContext();


function ShowHideCartContextProvider({children}) {
    const [showHideCart, setShowhideCart] = useState(false)


    const updateShowHideCart = (showHideCart) => {
        setShowhideCart(showHideCart);
    }


    console.log("estado actual del carrito desde el contexto===>", showHideCart);


    return (
        <ShowHideCartContext.Provider value={{showHideCart,  updateShowHideCart}}>
            {children}
        </ShowHideCartContext.Provider>
    );
    
}

export { ShowHideCartContext, ShowHideCartContextProvider}
