/*
    El componente Shopping cart se encarga de mostrar los elementos que el usuaro agregó al carrito.

    En componets/productCard se actualizo el contexto con la lista de los produtos que envia el usario, incluyendo
    cantidades.



*/

import React, {useContext, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

//importando el contexto del carrito
import {ShoppingCartContext} from '../context/ShoppingCart';
//contexto abrir o cerrar el carrito
import { ShowHideCartContext} from '../context/ShowCartContext';
//Elements
import ShoppingCartElement from '../elements/ShoppingCartElement';


function ShoppingCart(){
    const {showHideCart,  updateShowHideCart} = useContext(ShowHideCartContext);
    //desestructurando el estado inicial del carrito, y la funcion que actualiza el carrito
    const {cartproducts,  updateCartProducts} = useContext(ShoppingCartContext);
    const [newChart, setNewChart] = useState([]);


    //actualiza el contexto  para mostar o no el carrito linea 72
    const closeChart = () => {
        updateShowHideCart(false);
    }


    /*==> La funcion se encarga de aumentar o disminuir los la cantidad de producto al hacer click en los botones
    + o - lineas 106 y 107
    Recibe parametros, el primero el id del producto al que se hizo click y  el segundo una cadena de texto 
    que identidica que botón se ha clickeado 
    */
    const updateQuantity = (productId, increaseOrDecreaseQuantity) => {

        const newChart = [...cartproducts];

        newChart.forEach((chartProduct, index)=>{
            if(chartProduct.id === productId){

                if(increaseOrDecreaseQuantity === "decreaseQuantity"){
                    
                    let cantidad = newChart[index].cantidad;
                    newChart[index].cantidad = cantidad - 1 ;
                    setNewChart(newChart)

                    
                    let price = newChart[index].price;
                    newChart[index].price = Math.trunc(Number(price) - Number(price)/cantidad);
                    setNewChart(newChart)
                    
                }else if(increaseOrDecreaseQuantity === "increaseQuantity"){
                    let cantidad = newChart[index].cantidad;
                    newChart[index].cantidad = cantidad + 1 ;
                    setNewChart(newChart)

                    
                    let price = newChart[index].price;
                    newChart[index].price = Number(price) + Number(price)/cantidad;
                    setNewChart(newChart)
                }
                updateCartProducts(newChart);
            }
        })
    }

    return (
        <ShoppingCartElement className={`${showHideCart === true ? "showChart": "hideChart"}`} >
            <div className="container">
                <h4 onClick={closeChart}>
                    <span><FontAwesomeIcon icon={faAngleLeft} /></span>
                    Volver a la tienda
                </h4>
                <div className="chartHeader">
                    <h1>Carrito de compras</h1>
                    <h3><span>{cartproducts.length}</span> items</h3>
                </div>

                {
                    cartproducts.length !== 0 ?
                    <table>
                        <tr key="">
                            <th>Item</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                        {
                            cartproducts.map((cartProduct)=>{
                                return(
                                    <tr>
                                        <td>
                                            <div className="img-container">
                                                <img src={cartProduct.image} alt={cartProduct.title} />
                                            </div>
                                            <div className="productInfo">
                                                <h4>{cartProduct.name}</h4>
                                                <p>x {cartProduct.productUnits} Unids</p>
                                                <h5>{cartProduct.supplier}</h5>
                                            </div>
                                        </td>
                                        <td>
                                            <span  onClick={(e)=>updateQuantity(cartProduct.id, "decreaseQuantity")}><FontAwesomeIcon icon={  faMinusCircle  } /></span>
                                            <span>{cartProduct.cantidad}</span>
                                            <span onClick={(e)=>updateQuantity(cartProduct.id, "increaseQuantity")}><FontAwesomeIcon icon={ faPlusCircle } /></span>
                                        </td>
                                        <td>
                                            <h3><span>$</span> {cartProduct.price}</h3>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table> : <h2>No hay productos en el carrito</h2>
                }
            </div>
        </ShoppingCartElement>
    )
}

export default ShoppingCart;