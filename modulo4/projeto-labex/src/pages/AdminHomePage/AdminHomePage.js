import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToBack, goToCreateTripPage, goToLoginPage, goToListTripsPageDetailsPage } from '../../Rotas/Coordinator'
import { DivPrincipal, Sessao, ListaDeViagem, Card } from './style'

const AdminHomePage = () => {
    const navigate = useNavigate()

    return (
        <DivPrincipal>
            <p>Painel do Administrador</p>
            <Sessao>
                <button onClick={() => { goToBack(navigate) }}>Voltar</button>
                <button onClick={() => { goToCreateTripPage(navigate) }}>Criar Viagem</button>
                <button onClick={() => { goToLoginPage(navigate) }}>Logout</button>
            </Sessao>

            <ul>
                <ListaDeViagem>
                    <Card onClick={() => { goToListTripsPageDetailsPage(navigate) }}>Lista de viagens</Card>
                    <button>Excluir</button>
                </ListaDeViagem>
            </ul>

        </DivPrincipal>
    )
}

export default AdminHomePage