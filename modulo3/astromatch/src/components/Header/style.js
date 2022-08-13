import styled from "styled-components"

export const HeaderContainer = styled.header`
    width: 50vw;
    margin-left: -80%;

    h1 {
        font-size: 1.5rem;
        margin: 1rem 2rem 1rem 5rem;
        color: #ffa500
    }

`

export const BotaoLista = styled.button`
        cursor: pointer;
        padding: 3px;
        border-radius: 30%;
        color: red;
        border: 1px solid #ffa500;

        :hover {
            color: black;
            background-color: red;
        }
`

export const Div = styled.div`
    width: 20%;
    margin: 5px auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: aliceblue;
    margin-bottom: -40px;
    background-color: gray;
`
