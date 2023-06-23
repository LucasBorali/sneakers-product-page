import iconCart from './icon-cart.svg';
import iconClose from './icon-close.svg';
import iconDelete from './icon-delete.svg';
import iconMenu from './icon-menu.svg';
import iconMinus from './icon-minus.svg';
import iconNext from './icon-next.svg';
import iconPlus from './icon-plus.svg';
import iconPrevious from './icon-previous.svg';

import avatarImage from './image-avatar.png';
import product1Thumbnail from './image-product-1-thumbnail.jpg';
import product1 from './image-product-1.jpg';
import product2Thumbnail from './image-product-2-thumbnail.jpg';
import product2 from './image-product-2.jpg';
import product3Thumbnail from './image-product-3-thumbnail.jpg';
import product3 from './image-product-3.jpg';
import product4Thumbnail from './image-product-4-thumbnail.jpg';
import product4 from './image-product-4.jpg';

import logo from './logo.svg';

export const icons = {
  iconCart: iconCart,
  iconClose: iconClose,
  iconDelete: iconDelete,
  iconMenu: iconMenu,
  iconMinus: iconMinus,
  iconNext: iconNext,
  iconPlus: iconPlus,
  iconPrevious: iconPrevious,
};

export const product = {
  name: 'Fall Limited Edition Sneakers',
  company: 'Sneaker Company',
  description: `These low-profile sneakers are your perfect casual wear companion. Featuring a durabble rubber outer sole, they'll withstand everything the weather can offer.`,
  price: 250.00,
  images: [product1, product2, product3, product4],
  imagesThumbnails: [
    product1Thumbnail,
    product2Thumbnail,
    product3Thumbnail,
    product4Thumbnail,
  ],
};

export const others = {
  logo: logo,
  avatarImage: avatarImage,
};
