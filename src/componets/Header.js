/*
    El componente header importa el contexto shoppingCartContext para mostrar la cantidad de productos en el carrito
*/

import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import  HeaderElement from '../elements/HeaderElement';
//===>contextos
import  {ShoppingCartContext} from '../context/ShoppingCart';
import { ShowHideCartContext} from '../context/ShowCartContext';



function Header() {

    //===> constextos
    const {cartproducts} = useContext(ShoppingCartContext);
    const {showHideCart,  updateShowHideCart} = useContext(ShowHideCartContext);

    const showHideChart = () => {
        updateShowHideCart(true)
    }
 
    return (
        <HeaderElement>
            <header>
                <div className="container">
                    <div className="img-container">
                        <h2>Cart</h2>
                        {/* <img src="./images/logo.svg" alt="logo superfuds" /> */}
                    </div>
                    <div className="searchingBar">
                        <form>
                            <input type="text" /><button><FontAwesomeIcon icon={faSearch} /></button>
                        </form>
                        <div className="productQuantity" onClick={showHideChart}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <div>{cartproducts.length}</div>
                        </div>
                    </div>
                    <div className="userInfo">
                        <div>
                            <div>
                                <h5>Saiby alimentos</h5>
                                <h6>Mi perfil <FontAwesomeIcon icon={faAngleDown} /></h6>
                            </div>
                            <div className="img-container">
                                <img src="./images/userProfile.png" alt="user Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </HeaderElement>
    )
}

export default Header;
