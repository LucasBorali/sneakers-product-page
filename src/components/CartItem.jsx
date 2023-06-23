import React from 'react';
import classes from './CartItem.module.css';
import { icons } from '../Assets/constant';

const CartItem = ({ cart }) => {
  return (
    <li className={classes['list-item']}>
      <img className={classes.image} src={cart.image} alt="product" />
      <div>
        <h4>{cart.name}</h4>
        <p>
          {`$${cart.finalPrice * cart.discount} x ${cart.quantity}`}{' '}
          <span>{`$${(cart.finalPrice * cart.discount * cart.quantity).toFixed(
            2
          )}`}</span>
        </p>
      </div>
      <button>
        <img src={icons.iconDelete} alt="delete button" />
      </button>
    </li>
  );
};

export default CartItem;
