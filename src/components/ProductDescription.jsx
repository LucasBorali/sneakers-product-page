import React from 'react';
import classes from './ProductDescription.module.css';
import { icons } from '../Assets/constant';
import { useState } from 'react';

const ProductDescription = ({product, setAddToCart}) => {
  const discount = 0.5;
  const [productQuantity, setProductQuantity] = useState(1);
 

  const minusHandler = function () {
    if (productQuantity > 1) {
      setProductQuantity(prevState => prevState - 1);
    }
  };

  const plusHandler = function () {
    setProductQuantity(prevState => prevState + 1);
  };

  const addToCartHandler = function() {
    const newProduct = {
      key: product.name,
      name: product.name,
      image: product.imagesThumbnails[0],
      finalPrice: product.price,
      quantity: productQuantity,
      discount: discount
    }
    setAddToCart(prevState => [...prevState, newProduct])
  }
  

  return (
    <div className={classes['product-description']}>
      <h2>{product.company}</h2>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <div>
        <div>
          <div className={classes.discount}>
            <h3>{`$${( productQuantity * (product.price * discount)).toFixed(2)}`}</h3>
            <p>{`${discount * 100}%`}</p>
            <div className={classes['real-price']}>
              <p>{`$${product.price.toFixed(2)}`}</p>
            </div>
          </div>
        </div>
        <div className={classes.buying}>
          <div>
            <button onClick={minusHandler}>
              <img src={icons.iconMinus} alt="minus" />
            </button>
            <p>{productQuantity}</p>
            <button onClick={plusHandler}>
              <img src={icons.iconPlus} alt="plus" />
            </button>
          </div>
          <button onClick={addToCartHandler}>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
