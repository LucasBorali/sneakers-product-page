import React from 'react';
import classes from './ProductContent.module.css';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import DisplayImage from './DisplayImage';
import ProductDescription from './ProductDescription';

const ProductContent = ({product, setAddToCart}) => {
  const [bigPanel, setBigPanel] = useState(product.images[0]);
  const [openImage, setOpenImage] = useState(false)

  const selectImageHandler = function (event) {
    if (event.target.src === product.imagesThumbnails[0]) {
      setBigPanel(product.images[0]);
    }

    if (event.target.src === product.imagesThumbnails[1]) {
      setBigPanel(product.images[1]);
    }

    if (event.target.src === product.imagesThumbnails[2]) {
      setBigPanel(product.images[2]);
    }
    if (event.target.src === product.imagesThumbnails[3]) {
      setBigPanel(product.images[3]);
    }
  };

  const openImageHandler = function() {
    setOpenImage(true)
  }

  return (
    <div className={classes['product-content']}>
      <div className={classes['product-display']}>
        <img onClick={openImageHandler} className={classes['big-panel']} src={bigPanel} alt={bigPanel} />
        {openImage &&
        ReactDOM.createPortal(
          <DisplayImage setOpenImage={setOpenImage} bigPanel={bigPanel} />,
          document.getElementById('display-root')
        )}
        <ul>
          {product.imagesThumbnails.map(image => (
            <li onClick={selectImageHandler} key={image}>
              <img className={classes[`small-panel`]} src={image} alt={image} />
            </li>
          ))}
        </ul>
      </div>
      <ProductDescription setAddToCart={setAddToCart} product={product} />
      
    </div>
  );
};

export default ProductContent;
