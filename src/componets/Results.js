/*

En este componente se obtiene la lista de productos mediante el usu de un custome hook hooks/useFetch

 El componente result se encarga de mostrar la información al usuario, mediante props pasa la lista de produtos al
 componente ProductsCarousel.

*/

import React, {useState, useContext} from 'react';
//===>Hooks
//hook encargado  de hacer fetch(get) 
import useFetch from '../hooks/useFetch';
//==>Components
import ProductsCarousel from './ProductsCarousel';
//Context
//===>Contexto que trae todos los productos
import {AllProductsContext} from '../context/AllProducts';


function Results() {
    //==> obtiene todos los productos /hooks/useFETCH
    const [data, error] = useFetch('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json');
    //===> Actualizando el context de productos contex/Allproducts
    const {allProducts, updateAllProducts} = useContext( AllProductsContext);

    if(data.length > 0){
        updateAllProducts(data)
    }
    return (
        <div>
            {
                allProducts.length > 0 ? <ProductsCarousel products={data} />: console.log(error)
            }
        </div>
    )
}
export default Results
