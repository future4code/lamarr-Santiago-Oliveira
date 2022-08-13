import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToBack, goToApplicationFormPage } from '../Rotas/Coordinator'
import { useRequestData } from '../hooks/useRequestData'
import { BASE_URL } from "../constants/constants";
import styled from "styled-components";

const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    margin-left: 5%;
`

const Sessao = styled.section`
     button {
        width: 8rem;
        margin-left: 2rem;
        padding: 1rem;
        text-transform: uppercase;
        border: none;
        cursor: pointer;
        background-color: #2f4f4f;
        color: white;
        font-weight: bold;
        box-shadow:0 5px 0 black;
        :hover {
            background-color:#2f4f4f;
            box-shadow:0 5px 0 black;
        }
        :active {
            position:relative;
            top:5px;
            box-shadow:none;
        }
        
    }

    p {
        color: #d2691e;
        font-size: 2rem;
        font-weight: bold;
        margin-left: 3rem;
    }
`

const ListaViagens = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 27%;
`

const Lista = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    height: 30vh;
    background-color:#20b2aa;
    box-shadow: 10px 5px 10px 5px #d2691e;

    li {
        list-style: none;
        margin: 5px;
        color: white;
    }
`

const ListTripsPage = () => {
    const navigate = useNavigate()

    const [dataListaDeViagens, isLoadingListaViagens, erroListaViagens] = useRequestData(
        `${BASE_URL}trips`
    )
    console.log(dataListaDeViagens);

    const listaDeViagens = dataListaDeViagens && dataListaDeViagens.trips.map((list) => {
        return (
            <Lista key={list.id}>
                <li><b>Nome:</b> {list.name}</li>
                <li><b>Descrição: </b>{list.description}</li>
                <li><b>Planeta:</b> {list.planet}</li>
                <li><b>Duração:</b> {list.durationInDays}</li>
                <li><b>Data:</b> {list.date}</li>
            </Lista>
        )
    })

    return (
        <DivPrincipal>
            <Sessao>
                <button onClick={() => { goToBack(navigate) }}>Voltar</button>
                <button onClick={() => { goToApplicationFormPage(navigate) }}>Inscrever-se</button>
                <p>Lista de viagens</p>
            </Sessao>
            {isLoadingListaViagens && "Carregando..."}
            <ListaViagens>
                {!isLoadingListaViagens && listaDeViagens}
            </ListaViagens>
            {!isLoadingListaViagens && dataListaDeViagens
                && dataListaDeViagens.length === 0 && "Não há viagens disponíveis"}
            {!isLoadingListaViagens && !dataListaDeViagens && erroListaViagens}
        </DivPrincipal>
    )
}

export default ListTripsPage