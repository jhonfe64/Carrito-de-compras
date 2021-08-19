import React, {useState, useContext, useEffect} from 'react';
import ProductCardElement from '../elements/ProductCardElement';
//importaando el contexto del carrito
import {ShoppingCartContext} from '../context/ShoppingCart';


/*
    El componente ProductCard recibe la prop produts de tipo objeto del componente componente productCard.
    Este componente se encarga de actualizar el carrito al hacer click en el btn agregar al carrito.

    Ver components/ShoppingCart.js

*/


function ProductCard({products}){

    //Estado para el hover de los iconos
    const [StampName, setStampName] = useState("");
    //Actualizando el carrito  con contexto
    const {updateCartProducts, cartproducts} = useContext(ShoppingCartContext);


    //==> La funcion recibe los parametros al hacer click en el btn agregar al carrito
    const agregarProductoAlCarrito = (idProductoAAgregar, nombre, imagen, unidades, pesoNeto, proveedor, precio) => {
        //=====> Si el carrito esta vacio se agrega un producto
        if(cartproducts.length === 0){
            updateCartProducts([
                {
                    id: idProductoAAgregar,
                    name: nombre,
                    image: imagen,
                    productUnits: unidades,
                    netContent: pesoNeto,
                    supplier: proveedor,
                    price: precio,
                    cantidad: 1
                }
            ])
        }else{
            //====> de otra forma se verifica que el carrito no tenga ya el producto que se quiere agregar
            //====> Si ya tiene el producto, se debe actualizar el valor
            //====> si el producto no está, entonces se agrega

            //===> Para poder editar el arreglo del carrito cartproducts debe clonarse, no se puede editar directamente
            const nuevoCarrito = [...cartproducts];
            
            //===>Se comprueba si el carrito ya tiene un producto con el mismo id del producto que se quiere agregar
            
            const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito)=>{
                return productoDeCarrito.id === idProductoAAgregar;
            }).length > 0;


            //====> si el producto ya esta en el carrito, se debe actualizar
            if(yaEstaEnCarrito){
                //===> para actualizarlo hay que busacrlo, obtener su posición en el arreglo
                //===> y en base en su posición se actualiza el valor
                nuevoCarrito.forEach((productoDeCarrito, index)=>{
                    if(productoDeCarrito.id === idProductoAAgregar){
                        let cantidad = nuevoCarrito[index].cantidad;
                        //===> actualizando el carrito
                        nuevoCarrito[index] = {
                            id: idProductoAAgregar,
                            name: nombre,
                            image: imagen,
                            productUnits: unidades,
                            netContent: pesoNeto,
                            supplier: proveedor,
                            price: precio,
                            cantidad: cantidad + 1
                        }
                    }
                })
            }else{
                //======>Si no está en el carrito se debe agregar el nuevo producto al arreglo clonado
                nuevoCarrito.push(
                    {
                        id: idProductoAAgregar,
                        name: nombre,
                        image: imagen,
                        productUnits: unidades,
                        netContent: pesoNeto,
                        supplier: proveedor,
                        price: precio,
                        cantidad: 1
                    }
                )
            }

            //====> se actualiza el carrito cartProducts mediante la funcion updateCartProducts
            updateCartProducts(nuevoCarrito);
        }
    }

    return (
        <ProductCardElement>
            <div>
                <div className="stamps">
                    {
                        products.sellos.map((stamp)=>{
                        return(
                            <div>
                                {/* <img onMouseOver={showStamp}  key={stamp.name} src={stamp.image} alt={stamp.name} />
                                <div>{stamp.name}</div> */}
                            </div>
                        )
                    })
                }
                </div>
                <div key={products.id}>
                    <div className="img-container">
                        <img src={products.image} alt="" />
                    </div>
                    <div className="topInfo">
                        <h5>SuperFuds</h5>
                        <h5>{products.net_content}</h5>
                    </div>
                    <div className="productDetails">
                        <h3>{products.title}</h3>
                        <h2><span>$</span>{products.price_real}
                            <p>x {products.units_sf} Unids</p>
                        </h2>
                    </div>
                </div>
            </div>
            <button onClick={()=>agregarProductoAlCarrito(products.id, products.title, products.image, products.units_sf, products.net_content, products.supplier, products.price_real)}>Agregar al carrito</button>
        </ProductCardElement>
    )
}

export default ProductCard;