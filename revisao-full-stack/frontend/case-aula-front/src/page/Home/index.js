import React from 'react';
import Form from '../../components/Form';
import Header from "../../components/Header"
import Product from '../../components/Product';

const Home = () => {
    return (
        <div>
            <Header />
            <Product />
            <Form />
        </div>
    );
}

export default Home