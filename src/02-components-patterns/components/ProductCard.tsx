import { CSSProperties, createContext } from 'react';

import styles from '../styles/styles.module.css';

import { useProducts } from '../hooks/useProducts';
import { InitialValues, Product, ProductCardHandlers, ProductContexProps, onChangeArgs } from '../interfaces/interfaces';


export interface Props {
    // children?       : ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    product: Product;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContexProps)
const { Provider } = ProductContext;


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } 
        = useProducts({ onChange, product, value, initialValues })

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount,
        }}>

            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.count,
                    product,

                    increaseBy,
                    reset
                })
                }
            </div>
        </Provider>
    )
}



