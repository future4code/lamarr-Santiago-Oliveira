import React, { useState } from "react"
import logo from '../img/logo-labenu.jpg'
import { Body, Header, Parte1Conteudo, Form, AsideEsquerda, Content, Footer, Sessao1, Sessao2, Sessao3, AsideDireita } from '../style'
import { CardMensagem } from '../CardMensagem/CardMensagem'

import SendIcon from '@mui/icons-material/Send'


export function Input() {
    //estados
    const [inputNome, setInputNome] = useState("")
    const [inputMsg, setInputMsg] = useState("")
    const [usuario, setUsuario] = useState([])
    const [user, setUser] = useState([{ author: 'eu' }])

    const handleInputNome = (event) => {
        setInputNome(event.target.value)
    }

    const handleInputMsg = (event) => {
        setInputMsg(event.target.value)
    }

    //adicionar nova mensagem
    const enviarMensagem = (event) => {
        event.preventDefault()

        const novoUsuario = { nome: inputNome, mensagem: inputMsg }
        const novaListaDeMensagem = [...usuario, novoUsuario]
        setUsuario(novaListaDeMensagem)

        setInputNome("")
        setInputMsg("")
    }

    return (
        <>
            <Header>
                <img src={logo} alt="Logo da Labenu" />
                <h1>WhatsLab</h1>
            </Header>
            <Body>

                <AsideEsquerda />

                <Content>
                    <div>

                        <Parte1Conteudo>

                            {usuario.map((usuario, index) => (

                                <CardMensagem
                                    key={index}
                                    nome={usuario.nome}
                                    mensagem={usuario.mensagem}
                                    user={usuario.nome}

                                />
                            ))}
                        </Parte1Conteudo>
                    </div>

                    <Footer>
                        <div>

                            <Form>
                                <Sessao1>
                                    <label>Nome:</label>
                                    <input
                                        placeholder="Usuário"
                                        value={inputNome}
                                        onChange={handleInputNome}
                                    ></input>

                                </Sessao1>
                                <Sessao2>
                                    <label>Mensagem:</label>
                                    <input
                                        placeholder="Digite uma Mensagem"
                                        value={inputMsg}
                                        onChange={handleInputMsg}
                                    />
                                </Sessao2>
                                <Sessao3>
                                    <SendIcon onClick={enviarMensagem} />
                                </Sessao3>
                            </Form>
                        </div>
                    </Footer>

                </Content>

                <AsideDireita />

                {/*  {listaDeMensagem} */}

            </Body>
        </>
    )
}