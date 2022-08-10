import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToBack, } from '../Rotas/Coordinator'

const CreateTripPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <p>Criar nova viagem</p>
            <form>
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
            </form>

            <button onClick={() => { goToBack(navigate) }}>Voltar</button>
            <button>Criar</button>
        </>
    )
}

export default CreateTripPage