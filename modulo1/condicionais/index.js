// Exercícios de interpretação de código

// 1.

//a.
/* O código está recebendo um número do usuário através do prompt,
está armazennando em uma variável,
depois ele pega essa veriável converte em Number e armazena na variável numero,
após isso ela vai verificar se o resto da divisão do numero recebido por 2 é igual a 0,
 se for ele imprimi "Passou no teste", se não imprimi "Não passou no teste" */

 //b.
// Para números divisivies por 2.

//c.
// Para núneros que não são divisiveis por 2.

// 2.

//a.
/* Esse código serve para dar opções para o usuário escolher,
se ele escolher uma fruta será mostrado o preço dela */

//b.
// "O preço da fruta, Maçã, é R$ 2,25"

//c.
// "O preço da fruta, Pêra, é R$ 5"
//Porque não colocamos o break, então ele le o próximo valor

//3.

//a.
/* A primeira linha está comparando o número digitado pelo usuário com o 0,
verificando se numero digitado é > que 0. */

//b.
/* A mensagem será "Esse número passou no teste" para números maiores que 0.
Se digitado -10 dará erro, pois não tem outra condição. */

//c.
/* Sim, terá um erro pois a variável mensagem foi declarada dentro do escopo do if,
 dessa forma não será lida corretamente e apresentara erro.  */

//Exercícios de escrita de código

// 1.


    const idade = Number(prompt("Digite sua idade"))

    const idadePermitida = 18

    if(idade >= 18){
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }
 

//2.


    const turno = prompt("Digite o turno que você estuda - M, V ou N")

    const M = "M"
    const V = "V"
    const N = "N"

    if(turno === M){
        console.log("Bom dia!")
    } else if(turno === V){
        console.log("Boa tarde!")
    } else {
        console.log("Boa noite!");
    }


//3.


    const turno2 = prompt("Digite o turno que você estudao - M, V ou N")

    switch (turno2) {
        case "M":
            console.log("Bom dia!")
            break
        case "V":
            console.log("Boa tarde!")
            break
        case "N":
            console.log("Boa noite!")
            break
        default:
            console.log("Turno não encontrado")
            break
    }


//4.

 
    const genero = prompt("Digite o gênero do filme que vai assistir")
    const valorIngresso = Number(prompt("Digite o valor do ingresso"))

    const generoAceito = "Fantasia"
    const valorIngressoAceito = 15

      if(genero === generoAceito && valorIngresso === valorIngressoAceito){
          console.log("Bom filme!");
      } else {
          console.log("Escolha outro filme!");
    } 

/* 
//Desafio

//1.

    const genero = prompt("Digite o gênero do filme que vai assistir")
    const valorIngresso = Number(prompt("Digite o valor do ingresso"))
    const lanche = prompt("Qual lanche você vai comprar?")



      const generoAceito = "Fantasia"
      const valorIngressoAceito = 15

        if(genero === generoAceito && valorIngresso === valorIngressoAceito){
            console.log(`Bom filme! Aproveite seu ${lanche}!`)
        } else {
            console.log("Escolha outro filme!");
}  


//2.

//Ainda não conclui o exercíco 2 do desafio, não estou conseguindo montar o código, vou continuar tentando por partes.


    const nomeCompleto = prompt("Digite seu nome completo")
    const tipoDeJogo = prompt("Digite o tipo de jogo - IN, DO")
    const etapaDoJogo = prompt("Digite a etapa do jogo - SF, DT ou FI")
    const categoria = Number(prompt("Digite a categoria - 1 ,2 ,3 ou 4"))
    const quantidadeDeIngressos = Number(prompt("Digite a quantidade de ingressos"))
    const valorUnitario = 1320

    const valorTotalReal = valorUnitario * quantidadeDeIngressos
    //const valorTotalDolar = valorIngressoUnitarioSF * 4.10

    const dadosDaCompra = {
        nome: nomeCompleto,
        tipo: tipoDeJogo,
        etapa: etapaDoJogo,
        categoria: categoria,
        quantidadeDeIngressos: quantidadeDeIngressos
    }



    /function imprimirDadosDaCompra (nome, tipo,etapa,categoria,quantidade){
        if(etapaDoJogo === "SF" && categoria === 1){
            console.log(`---Dados da compra---\n${dadosDaCompra}\n ---Valores---\n${valorUnitario} ${valorTotalReal}`);
        }else if (etapaDoJogo === "SF" && categoria === 2){
                console.log(`---Dados da compra---\n${dadosDaCompra}\n ---Valores---\n${valoresCatSf2}`)
        } else if (etapaDoJogo === "SF" && categoria === 3){
            console.log(`---Dados da compra---\n${dadosDaCompra}\n ---Valores---\n${valoresCatSf3}`)
        } else if (etapaDoJogo === "SF" && categoria === 4){
            console.log(`---Dados da compra---\n${dadosDaCompra}\n ---Valores---\n${valoresCatSf4}`)
        }    
    }

    console.log(imprimirDadosDaCompra(nomeCompleto, tipoDeJogo, etapaDoJogo, categoria, quantidadeDeIngressos))  
 */