import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3%;

p {
    font-size: 2rem;
    color: #d2691e;
    font-weight: bold;
}
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 40%;
    background-color:#20b2aa;
    box-shadow: 10px 5px 10px 5px #d2691e;
    padding: 2rem; 

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

input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input, select {
    padding: 0.5rem;
    border: none;
    margin-bottom: 4%;
    border-radius: 10px;
    :focus {
        box-shadow: 0 0 2em #d2691e;
        outline: 0;
    }
}
`

export const Botoes = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    
 button {
    width: 8rem;
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

