import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ShoppingCartProvider} from './context/ShoppingCart';
import {AllProductsProvider} from './context/AllProducts';
import {ShowHideCartContextProvider} from './context/ShowCartContext';


ReactDOM.render(
  <React.StrictMode>
    <ShowHideCartContextProvider>
      <AllProductsProvider>
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </AllProductsProvider>
    </ShowHideCartContextProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
