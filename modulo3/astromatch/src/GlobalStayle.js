import { createGlobalStyle } from "styled-components";

export const GlobalStayle = createGlobalStyle`
    :root {
        // Aqui vai as variáveis de cores
    }

    h1 {
        // Aqui vai as configurações que quero para todos os h1 da aplicação
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`