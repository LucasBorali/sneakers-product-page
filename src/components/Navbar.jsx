import React, { useState } from 'react';
import { others } from '../Assets/constant';
import classes from './Navbar.module.css';
import Cart from './Cart';
import ReactDOM from 'react-dom';

const Navbar = ({ cart, setAddToCart }) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const menuHandler = function () {
    if (displayMenu === false) {
      setDisplayMenu(true);
    } else {
      setDisplayMenu(false);
    }
  };



  const overlayClickHandler = function (event) {
   setDisplayMenu(false);
  }

  return (
    <nav className={classes.navbar}>
      <div>
        <img src={others.logo} alt="logo" />

        {window.innerWidth <= 500 ? (
          <button onClick={menuHandler}>
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                fill="#69707D"
              />
            </svg>
          </button>
        ) : (
          <ul>
            <li>
              <a href="./">Collections</a>
            </li>
            <li>
              <a href="./">Men</a>
            </li>
            <li>
              <a href="./">Women</a>
            </li>
            <li>
              <a href="./">About</a>
            </li>
            <li>
              <a href="./">Contact</a>
            </li>
          </ul>
        )}
        {displayMenu &&
          ReactDOM.createPortal(
            <div onClick={overlayClickHandler} className={classes['mobile-menu']}>
              {' '}
              <ul>
                <li>
                  <a href="./">Collections</a>
                </li>
                <li>
                  <a href="./">Men</a>
                </li>
                <li>
                  <a href="./">Women</a>
                </li>
                <li>
                  <a href="./">About</a>
                </li>
                <li>
                  <a href="./">Contact</a>
                </li>
              </ul>
            </div>,
            document.getElementById('window-root')
          )}
      </div>
      <div>
        <Cart cart={cart} setAddToCart={setAddToCart} />
        <img className={classes.profile} src={others.avatarImage} />
      </div>
    </nav>
  );
};

export default Navbar;
