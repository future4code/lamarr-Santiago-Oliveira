import styled from "styled-components";

export const Home = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    margin-left: 30%;
    width: 40%;
    height: 50vh;
    background-color:#20b2aa;
    box-shadow: 10px 5px 10px 5px #d2691e;

    h1 {
        color: white;
        font-size: 3rem;
        margin-left: 1rem;
    }

    button {
        width: 9rem;
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