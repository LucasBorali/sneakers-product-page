import React from 'react';
import { others } from '../Assets/constant';
import classes from './Navbar.module.css'
import Cart from './Cart';

const Navbar = ({cart}) => {
  
  return (
    <div className={classes.navbar} >
        <div>
        <div>
        <img src={others.logo} alt="logo"/>
        </div>
        <div> 
            <ul>
                <li><a href="./">Collections</a></li>
                <li><a href="./">Men</a></li>
                <li><a href="./">Women</a></li>
                <li><a href="./">About</a></li>
                <li><a href="./">Contact</a></li>
            </ul>
        </div>
        </div>
        <div>
            <Cart cart={cart} />
            <img className={classes.profile} src={others.avatarImage} />
        </div>
    </div>
  );
};

export default Navbar;
