import React, { useState } from "react"
import { Div, Form, AsideEsquerda, Sessao1, Sessao2, Sessao3, AsideDireita } from '../style'


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
    }

    const listaDeMensagem = usuario.map((usuario, index) => {
        console.log(usuario.nome)
        return (
            <div key={index}>
                <p>{usuario.nome}</p>
                <p>{usuario.mensagem}</p>
            </div>
        )
    })

    return (
        <Div>
            <AsideEsquerda />
            <Form>

                <Sessao1>
                    <label>Nome:</label>
                    <input
                        placeholder="Usuário"
                        value={inputNome}
                        onChange={handleInputNome}
                    />
                </Sessao1>
                <Sessao2>
                    <label>Mensagem:</label>
                    <input
                        placeholder="Mensagem"
                        value={inputMsg}
                        onChange={handleInputMsg}
                    />
                </Sessao2>
                <Sessao3>
                    <button onClick={enviarMensagem}>Enviar</button>
                </Sessao3>

            </Form>
            <AsideDireita />
            {listaDeMensagem}
        </Div>
    )
}