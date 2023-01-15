import React from 'react';
import logo from "../../assets/img/logoMercadinho.png";
import { MyHeader, MyLogo } from './style';

const Header = () => {
    return (
        <MyHeader>
            <MyLogo src={logo} alt="Logo do Mercadinho" />
        </MyHeader>
    );
}

export default Header