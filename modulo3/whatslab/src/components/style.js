import styled from "styled-components";

export const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100vh;
`

export const AsideEsquerda = styled.aside`
    height: 100vh;
`

export const Form = styled.form`
    width: 40vw;
    background-color: #D4CDC3;
    border: 1px solid black;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 10px;
    gap: 1%;
`

export const Sessao1 = styled.section`

    label {
        //screen reader only
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }

    input {
        width: 7vw;
        padding: 10px;
        border-radius: 7px;
        border: none; 
        :focus {
            box-shadow: 0 0 1em gold;
            outline: 0;
        }
    }
`

export const Sessao2 = styled.section`

    label {
        //screen reader only
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }

    input {
        width: 25vw;
        padding: 10px;
        border-radius: 7px;
        border: none;
        :focus {
            box-shadow: 0 0 1em gold;
            outline: 0;
        }
    }
 
`

export const Sessao3 = styled.section`
    button {
    background-color: #e7e7e7;
    padding: 25%;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    :hover {
        background-color: #615f5f;
        color: white;
    }
    }
`

export const AsideDireita = styled.aside`
    height: 100vh;
`
