import React, { useState } from "react"
import { HeaderContainer, Div, BotaoLista } from './style'
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios'

const Header = (props) => {

    const [match, setMatch] = useState([])


    const matches = match.map((match) => {
        return (
            <li>{getMatches}</li>
        )
    })

    const getMatches = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/santiago-oliveira/matches`)
            .then((response) => {
                setMatch([response.data.profile])
                console.log(response.data.profile);
            }).catch((erro) => {
                console.log(erro.response);
                alert("Erro")
            })
    }

    return (
        <HeaderContainer>
            <Div>
                <h1>astromatch</h1>
                {matches}
                <BotaoLista>
                    <VisibilityIcon type="button" onClick={() => setMatch(getMatches)} />
                </BotaoLista>
            </Div>
        </HeaderContainer>

    )
}

export default Header