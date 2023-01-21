import React from 'react';
import { MyProduct } from './style';

const Product = () => {
    return (
        <MyProduct>
            <p>Mamão Papaia</p>
            <input type="number" />
            <p>E$ 0,00</p>
            <button>Remover</button>
        </MyProduct>
    );
}

export default Product