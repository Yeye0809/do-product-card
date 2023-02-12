import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';


export interface ProductImageProps {
  className?: string,
  img?: string,
  style?: CSSProperties,

}

export const ProductImg = ({ img, className, style }:ProductImageProps ) => {
    const { product } = useContext(ProductContext);
  
    let imageShow: string;
  
    if( img ){
      imageShow = img;
    }else if( product.img ){
      imageShow = product.img;
    }else{
      imageShow = noImage
    }
   
  
    return (
      <img 
        className={ `${ styles.productImg } ${ className }` } src={ imageShow } alt="product " 
        style={ style }/>
  
    )
  }