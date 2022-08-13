import React from "react"
import { HeaderContainer, Div, BotaoLista } from './style'
import VisibilityIcon from '@mui/icons-material/Visibility';
/* import axios from 'axios' */

const Header = (props) => {
    const { changePage } = props

    return (
        <HeaderContainer>
            <Div>
                <h1>astromatch</h1>
                <BotaoLista>
                    <VisibilityIcon type="button" onClick={() => changePage("telamatches")} />
                </BotaoLista>
            </Div>
        </HeaderContainer>

    )
}

export default Header