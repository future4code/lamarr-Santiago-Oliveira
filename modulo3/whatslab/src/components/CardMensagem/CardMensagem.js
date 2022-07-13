import React from "react";
import { MensagemLinha, MensagemItem, MensagemTexto } from "../style";


export const CardMensagem = (usuario, user) => {
    return (
        <MensagemLinha
        /*  style={{ justifyContent: user.author === usuario.nome ? 'flex-end' : 'flex-start' }} */
        >

            <MensagemItem
            /*   style={{
                  backgroundColor: user.author === usuario.nome ? '#DCF8C6' : '#FFF'
              }} */
            >
                <MensagemTexto>
                    <p>{usuario.nome}:</p>
                    <p>{usuario.mensagem}</p>
                </MensagemTexto>

            </MensagemItem>

        </MensagemLinha>
    )
}