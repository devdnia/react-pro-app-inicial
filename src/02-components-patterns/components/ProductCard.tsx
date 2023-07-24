import { CSSProperties, ReactElement, createContext } from 'react';

import styles from '../styles/styles.module.css';

import { useProducts } from '../hooks/useProducts';
import { Product, ProductContexProps } from '../interfaces/interfaces';


export interface Props {
    children?   : ReactElement | ReactElement[];
    product     : Product;
    className?  : string;
    style?      : CSSProperties;
}

export const ProductContext = createContext({} as ProductContexProps )
const { Provider } = ProductContext;


export const ProductCard = ({ children, product, className, style  }: Props ) => {

    const { counter, increaseBy } = useProducts()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>

            <div 
                className={`${ styles.productCard} ${ className }`}
                style={ style }    
            >
                {children}
            </div>
        </Provider>
    )
}



