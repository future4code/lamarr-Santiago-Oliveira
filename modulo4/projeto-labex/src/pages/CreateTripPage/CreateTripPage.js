import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToBack, } from '../../Rotas/Coordinator'
import { Botoes, Div, Form } from "./style";

const CreateTripPage = () => {
    const navigate = useNavigate()

    return (
        <Div>
            <p>Criar nova viagem</p>
            <Form>
                <label>Nome</label>
                <input type="nome" placeholder="Nome" />
                <label>Planeta</label>
                <input type="text" placeholder="Planeta" />
                <label>Data</label>
                <input type="data" placeholder="Data" />
                <label>Descrição</label>
                <input type="text" placeholder="Descrição" />
                <label>Duração</label>
                <input type="number" placeholder="Duração" />
            </Form>

            <Botoes>
                <button onClick={() => { goToBack(navigate) }}>Voltar</button>
                <button>Criar</button>
            </Botoes>
        </Div>
    )
}

export default CreateTripPage