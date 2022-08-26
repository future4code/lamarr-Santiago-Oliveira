import styled from "styled-components"

export const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    margin-left: 5%;
`


export const Sessao = styled.section`
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

export const ListaViagens = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30%;
`

export const Lista = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    padding: 10px;
    background-color:#20b2aa;
    box-shadow: 10px 5px 10px 5px #d2691e;

    li {
        list-style: none;
        margin: 5px;
        color: white;
}
`