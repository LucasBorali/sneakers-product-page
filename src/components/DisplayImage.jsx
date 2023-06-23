import React from 'react';
import classes from './DisplayImage.module.css';
import { icons } from '../Assets/constant';

const DisplayImage = ({ setOpenImage, bigPanel }) => {

const displayImageHandler = function() {
    setOpenImage(false)
}

const displayOverlayHandler = function(event) {
    if(event.target.className === 'DisplayImage_display-image__IpjOw') {
        setOpenImage(false);
    }
}



  return (
    <div onClick={displayOverlayHandler} className={classes['display-image']}>
      <div>
        <button onClick={displayImageHandler}><img src={icons.iconClose} alt="close"/></button>
        <img src={bigPanel} alt='Image unavailable' />
      </div>
    </div>
  );
};

export default DisplayImage;
