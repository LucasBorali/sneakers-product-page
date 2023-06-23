import React from 'react';
import classes from './Cart.module.css';
import { icons } from '../Assets/constant';
import ReactDOM from 'react-dom';
import CartWindow from './CartWindow';
import { useState } from 'react';

const Cart = ({cart}) => {
  
  const [displayWindow, setDisplayWindow] = useState(false);

  const displayWindowHandler = function () {
    setDisplayWindow(true);
  };

  

  return (
    <div className={classes.cart}>
      <button onClick={displayWindowHandler}>
        <img src={icons.iconCart} alt="cart-icon" />
      </button>
      {displayWindow &&
        ReactDOM.createPortal(
          <CartWindow cart={cart} setDisplayWindow={setDisplayWindow} />,
          document.getElementById('window-root')
        )}
    </div>
  );
};

export default Cart;
