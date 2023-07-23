import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

const product = {
    id: '1',
    title: 'Coffee',
    img: './coffee-mug.png'
}


export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
            }}>
                
                {/* Mediante propiedades */}
                <ProductCard product={ product }>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons  /> 
                </ProductCard>

                {/* Mediante componentes */}
                <ProductCard product={ product }>
                    <ProductImage />
                    <ProductTitle title={ "Café"}/>
                    <ProductButtons /> 
                </ProductCard>
            </div>

        </div>
    )
}
