import styled from "styled-components";

export const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 615px;
`

export const AsideEsquerda = styled.aside`
    width: 20vw;
    height: 615px;
`

export const Main = styled.div`
    width: 40vw;
    background-color: #D4CDC3;
    border: 1px solid black;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 10px;
    gap: 5px;
`

export const Sessao1 = styled.section`
    input {
        width: 7vw;
        padding: 10px;
        border-radius: 7px;
        border: none;        
    }
`

export const Sessao2 = styled.section`
    input {
        width: 25vw;
        padding: 10px;
        border-radius: 7px;
        border: none;
    }
 
`

export const Sessao3 = styled.section`
    button {
    background-color: #e7e7e7;
    padding: 10px;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    }
`

export const AsideDireita = styled.aside`
    height: 615px;
`