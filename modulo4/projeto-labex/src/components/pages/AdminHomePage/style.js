import styled from "styled-components";

export const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    margin-left: 5%;
    p {
        color: #d2691e;
        font-size: 2rem;
        font-weight: bold;
        margin-left: 3rem;
    }
`


export const Sessao = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;;

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
`

export const ListaDeViagem = styled.div`

button {
    width: 8rem;
    margin-left: 13rem;
    margin-top: 10px;
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
    
`
export const Card = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    height: 30vh;
    background-color:#20b2aa;
    box-shadow: 10px 5px 10px 5px #d2691e;
    margin: 5px 0 0 5px;

    li {
        list-style: none;
        margin: 5px;
        color: white;
    }

`

export const Botao = styled.button`
    margin-bottom: 10px;
`