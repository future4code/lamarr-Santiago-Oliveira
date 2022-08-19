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
    h2{
        color: white;
        text-align: center;
    }
`

export const Sessao = styled.section`
    button {
        width: 8rem;
        margin-left: 2rem;
        margin-bottom: 2rem;
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

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 3rem;
    margin-bottom: 2rem;
    width: 500px;
    height: 30vh;
    background-color:#20b2aa;
    box-shadow: 10px 5px 10px 5px #d2691e;

    li {
        list-style: none;
        margin: 5px;
        color: white;
    }
`
