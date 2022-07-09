import styled from "styled-components";

export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 20px;
    height: 40vh;
    border: 1px solid pink;
    border-radius: 10px;
    padding: 20px;


    label {
        margin-right: 5px;
    }

    button {
        padding: 5px;
        border-radius: 5px;
        border: 0;
        outline: 0;
        :hover {
            background-color: #706f6f;
            border: 1px solid yellowgreen;
            cursor: pointer;     
        }
    }
`

export const Input = styled.input`
    border: 0;
    padding: 10px;
    outline: 0;
    :hover {
        border: 1px solid pink;
        border-radius: 5px;
        padding: 10px;
    }
`

export const Sessao = styled.div`
    padding: 10px;
`
export const DivPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`