import React from 'react';
import { MyOrderForm } from './style';

const Form = () => {
    return (
        <MyOrderForm>
            {/* client */}
            <div id="selec-client">
                <label htmlFor="client">Nome do Cliente:</label>
                <input id="client" list="dataClient"></input>
                <datalist id="dataClient">
                    <option>Santiago</option>
                    <option>Fernanda</option>
                    <option>Pipoca</option>
                    <option>Kinha</option>
                </datalist>
                <button>Confirmar</button>
            </div>

            {/* product */}
            <div id="select-product">
                <label htmlFor="product">Produto:</label>
                <input id="product" list="dataProduct"></input>
                <datalist id="dataProduct">
                    <option>Banana</option>
                    <option>Goiaba</option>
                    <option>Mamão</option>
                    <option>Uva</option>
                </datalist>
                <label htmlFor="qty">Quantidade:</label>
                <input id="qty" type="number"></input>
                <p>R$ 0,00</p>
                <button>Adicionar</button>
            </div>

            {/* Order */}
            <div id="order">
                <label htmlFor="deliveryDate">Data de entrega (DD/MM/AAAA):</label>
                <input id="deliveryDate"></input>
                <button>Finalizar compra</button>
            </div>

        </MyOrderForm>
    );
}

export default Form