/*

El componente Products carousel recibe:

  props typo array (lista de productos), mapea y envia mediante props los objetos al componente ProductCard 
  para visualizar la informaciPon.

   El componente usa la librería  react-slideshow-image ^3.5.0" para documentacion visite https://www.npmjs.com/package/react-slideshow-image

*/


import React,{useState} from 'react'
import ProductCard from "./ProductCard";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import ProductCardCarouselElement from '../elements/ProductCardCarouselElement';

const ProductsCarousel = ({products}) => {


  const[resizeState, setResizeState] = useState("");
 
  const style = {
    textAlign: 'center',
    background: 'transparent',
    padding: '200px 0',
    fontSize: '30px'
  };

  const properties = {
    duration: 3000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    indicators: true,
  };


  //Carouse Responsive al hacer resize

  if (window.matchMedia("(max-width: 1500px)").matches) {
      properties.slidesToShow = 2;
      properties.slidesToScroll=2
  } 
  if (window.matchMedia("(max-width: 900px)").matches){
      properties.slidesToShow = 1;
      properties.slidesToScroll=1;
  }
  

  window.addEventListener("resize", function(){

    if(window.matchMedia("(max-width: 1500px)").matches) {
      setResizeState("medium");
    }

    if(window.matchMedia("(min-width: 1500px)").matches) {
      setResizeState("large");
    }
  });


  if(resizeState === "medium"){
    properties.slidesToShow = 1;
    properties.slidesToScroll=1
  }

  if(resizeState === "large"){
    properties.slidesToShow = 5;
    properties.slidesToScroll=5
  }


  return (
    <ProductCardCarouselElement>
    <div className="container">
    <div className="seeMore">
      <h3>Nuevo en SuperFuds</h3><h5>Ver más</h5>
    </div>
      <div>
        <Slide {...properties}>
            {
                products.map((product)=>{
                    return (
                        <ProductCard style={style} products={product} />
                    )
                })
            }
        </Slide>
      </div>
    </div>
    </ProductCardCarouselElement>
  );
};

export default ProductsCarousel;