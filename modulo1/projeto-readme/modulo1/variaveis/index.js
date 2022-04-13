/* 
                    1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b) 


                    Resposta:

        10
        10, 5            

*/


/*                  
                    2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

                    Resposta:

        10, 10, 10   
        
*/

/*
                    3. Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis.
                    Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, 
                    os nomes não podem começar com números ou caracteres especiais.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)            

                    Resposta:

        Esse programa solicita que o usuário digite a quantidade de horas trabalhadas e o quanto ele recebe por dia,
        no final ele da uma alert com o valor que a pessoa recebe por hora.

        Sugiro nome de variaveis: horasTrabalhadasPorDia e valorRecebePorDia

*/  

/* 
- **Exercícios de escrita de código**
    1. Construa um programa, seguindo os seguintes passos:
        
        a) Declare uma variável para armazenar um nome, sem atribuir um valor.
        
        b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
        
        c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
        
*/

                /* Aqui está o código  */


// let nome

// let idade

// console.log(typeof nome)
// console.log(typeof idade)

                /*Fim código*/

/* 
    d) Reflita: por que esse tipo foi impresso? 
    Escreva a resposta em um comentário de código.


                Resposta:

        Foi impresso no console tipo undefined pois apenas declaramos as variaveis sem nenhum valor.
*/


/* 
    e) Pergunte ao usuário seu nome e sua idade, 
   atribuindo esses dois valores às variáveis que acabou de criar.

*/   

                /* Aqui está o código  */

// let nome = prompt("Qual é o seu nome?")

// let idade = prompt("Qual é a sua idade?")

// console.log(typeof nome)
// console.log(typeof idade)

                /*Fim código*/

/* 
    f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? 
    Escreva em um comentário de código.

                Resposta:
        Imprimiu no console nome tipo string e idade tipo string mesmo digitando um número para idade, 
        pois tudo que vai no prompt vira uma variável do tipo string
        
*/

/* 
    g) Para finalizar, imprima na tela a mensagem:
     "Olá nome,  você tem idade anos". 
     Onde nome e idade são os valores que o usuário inseriu 
*/

                /* Aqui está o código  */
                
// let nome = prompt("Qual é o seu nome?")

// let idade = Number(prompt("Qual é a sua idade?")) // Aqui foi feito a conversão de string para Number


// console.log("Olá", nome, "você tem", idade, "anos")
// console.log(typeof nome)
// console.log(typeof idade)

                /*Fim código*/

/*
    2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo:
     "Você está usando uma roupa azul hoje?". Depois, siga os passos:
    
    a) Crie três novas variáveis, contendo as respostas
    
    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
*/    

                /* Aqui está o código  */

// let pergunta1 = prompt("Você está feliz estudando na Labenu?")
// let pergunta2 = prompt("Você está aprendendo o que está sendo passado nas aulas?")
// let pergunta3 = prompt("Você tem práticando os conteúdos?")

// let respos1 = pergunta1
// let respos2 = pergunta2
// let respos3 = pergunta3

// console.log("Você está feliz estudando na Labenu", respos1)
// console.log("Você está aprendendo o que está sendo passado nas aulas?", respos2)
// console.log("Você tem práticando os conteúdos?", respos3)

                /*Fim código*/

/*
    Exercício 3.
*/    

                /* Aqui está o código  */

// let a = 10
// let b = 25
// c = a
// a = b
// b = c

// console.log("O novo valor de a é", a)
// console.log("O novo valor de b é", b)

                /*Fim código*/





                            /*Desafio*/

                /* Aqui está o código  */

// let primeiroNumero = Number(prompt("Digite o primeiro número:"))
// let segundoNumero = Number(prompt("Digite o segundo número:"))

// let resultadoSoma = primeiroNumero + segundoNumero
// let resultadoMultiplicado = primeiroNumero * segundoNumero

// console.log("O primeiro número somado ao segundo número resulta em:", resultadoSoma)
// console.log("O primeiro número multiplicado ao segundo número resulta em:", resultadoMultiplicado)

                /*Fim código*/
           