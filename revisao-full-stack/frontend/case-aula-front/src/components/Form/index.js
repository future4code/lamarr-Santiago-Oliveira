import React, { useState } from 'react';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import { useRequestData } from '../../hooks/useRequestData';
import { MyOrderForm } from './style';

const Form = () => {

    const [visebleButtonClient, setVisebleButtonClient] = useState(true)
    //Dados do form
    const [form, onChange, resetState] = useForm({ client: "", product: "", qty: 1, delivery_date: "" })

    //Dados Clientes
    const [dataClient, isLoadingClient, errorClient, upClient, setUpClient] = useRequestData(`http://localhost:3003/clients`)
    //Dados Produtos
    const [dataProduct, isLoadingProduct, errorProduct] = useRequestData(`http://localhost:3003/products`)
    //Cliente Selecionado
    const selectClient = !isLoadingClient && dataClient && dataClient.find((dClient) => {
        return dClient.name === form.client
    })

    //Adicionar cliente
    const addClient = () => {
        const body =
        {
            "name": form.client
        }

        axios.post('http://localhost:3003/client', body, {})
            .then((response) => {
                setUpClient(!upClient)
            }).catch((error) => {
                console.log(error.message);
            })
    }

    //Selecionar cliente
    const selectClientViseble = () => {
        setVisebleButtonClient(!visebleButtonClient)
    }


    return (
        <MyOrderForm>
            <div>
                {selectClient && !visebleButtonClient &&
                    <h1>Cliente: {selectClient.name}</h1>}
            </div>
            {/* client */}
            <div id="selec-client">
                <label htmlFor="client">Nome do Cliente:</label>
                <input id="client" list="dataClient" name="client" onChange={onChange} value={form.client}></input>

                <datalist id="dataClient">
                    {isLoadingClient && !dataClient && <option>Carregando...</option>}
                    {!isLoadingClient && dataClient && dataClient.map((client) => {
                        return (
                            <option key={client.id}>
                                {client.name}
                            </option>
                        )
                    })}
                </datalist>
                {!selectClient && (form.client.length > 2) &&
                    <button type='button' onClick={() => { addClient() }} >Cadastar Cliente</button>}

                {selectClient && visebleButtonClient &&
                    <button type='button' onClick={() => { selectClientViseble() }} >Confirmar</button>}

            </div>

            {/* product */}
            <div id="select-product">
                <label htmlFor="product">Produto:</label>
                <input id="product" list="dataProduct"></input>
                <datalist id="dataProduct">
                    {isLoadingProduct && !dataProduct && <option>Carregando...</option>}
                    {!isLoadingProduct && dataProduct && dataProduct.map((product) => {
                        return (
                            <option key={product.id}>
                                {product.name}
                            </option>
                        )
                    })}
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