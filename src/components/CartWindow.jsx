import React from 'react';
import classes from './CartWindow.module.css';
import CartItem from './CartItem';

const CartWindow = ({ setDisplayWindow, cart }) => {
  const displayWindowHandler = function (event) {
    if (event.target.className === 'CartWindow_cart-window__-ha8a') {
      setDisplayWindow(false);
    }
  };

  return (
    <div onClick={displayWindowHandler} className={classes['cart-window']}>
      <div className={classes.card}>
        <header>
          <h1>Cart</h1>
        </header>
        <main>
          {cart.length === 0 ? (
            <h2>Your cart is empty.</h2>
          ) : (
            <ul>
            {cart.map(item => <CartItem key={item.key} cart={item} />)}
            </ul>
          )}
          
        </main>
      </div>
    </div>
  );
};

export default CartWindow;
