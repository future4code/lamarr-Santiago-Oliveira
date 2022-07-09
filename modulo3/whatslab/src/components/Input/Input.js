import React, { useState } from "react"
import { Body, Parte1Conteudo, Parte2Conteudo, Form, AsideEsquerda, Content, Sessao1, Sessao2, Sessao3, AsideDireita } from '../style'
import { CardMensagem } from '../CardMensagem/CardMensagem'


export function Input() {
    //estados
    const [inputNome, setInputNome] = useState("")
    const [inputMsg, setInputMsg] = useState("")
    const [usuario, setUsuario] = useState([])

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

    /*     const listaDeMensagem = usuario.map((usuario, index) => {
            console.log(usuario.nome)
            return (
                <Card key={index}>
                    <div>
                        <p>{usuario.nome}:</p>
                        <p>{usuario.mensagem}</p>
                    </div>
                </Card>
            )
        }) */

    return (
        <Body>
            <AsideEsquerda />

            <Content>

            <Parte1Conteudo>

                {usuario.map((usuario, index) => (

                    <CardMensagem
                        key={index}

                    />
                ))}
            </Parte1Conteudo>

           <Parte2Conteudo>
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
                        <button onClick={enviarMensagem}>Enviar</button>
                    </Sessao3>
                </Form>
                </Parte2Conteudo>
                </Content>
            <AsideDireita />

            {/*  {listaDeMensagem} */}

        </Body>
    )
}