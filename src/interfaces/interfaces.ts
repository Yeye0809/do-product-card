import { ProductButtonsProps } from '../componentes/ProductButtons';
import { ProductCardProps } from '../componentes/ProductCard';
import { ProductImageProps } from '../componentes/ProductImg';
import { ProductTitleProps } from '../componentes/ProductTitle';

  
  
export interface Product {
    id: string,
    title: string,
    img?: string
  }
  
export interface ProductContextProps {
    counter: number,
    product: Product,
    maxCount?: number

    increaseBy: (value:number) => void,
  }

  export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Buttons: ( Props: ProductButtonsProps ) => JSX.Element,
    Image:   ( Props: ProductImageProps ) => JSX.Element,
    Title:   ( Props: ProductTitleProps ) => JSX.Element,
  }
  
  export interface onChangeArgs {
    product: Product,
    count: number,
  }

  export interface ProductInCard extends Product {
    count: number 
  }

  export interface InitialValue {
    count?: number,
    maxCount?: number,
  }

  export interface ProductCardHandlers {
    count: number,
    isMaxReached: boolean,
    maxCount?: number,
    product: Product,
    increaseBy: (value: number) => void,
    reset: () => void,

  }