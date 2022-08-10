import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToBack } from '../Rotas/Coordinator'

const ApplicationFormPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p>Inscreva-se para uma viagem</p>
            <form>
                <label>Viagem</label>
                <input type="nome" placeholder="Nome da Viagem" />
                <label>Nome</label>
                <input type="nome" placeholder="Nome completo" />
                <label>Idade</label>
                <input type="number" placeholder="Idade" />
                <label></label>
                <input type="text" placeholder="Porque sou um bom candidato?" />
                <label></label>
                <input type="text" placeholder="Nome completo" />
                <label>País</label>
                <input placeholder="Escolha um País" />
            </form>

            <button onClick={() => { goToBack(navigate) }}>Voltar</button>
            <button>Enviar</button>
        </div>
    )
}

export default ApplicationFormPage