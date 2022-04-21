// Exercício 1
// a.
/* No primeiro console será impresso 10
No segundo console será impresso 50 */

// b.
/* Não apareceria nada, pois o programa iria apenas realizar a função, mais não mostraria no console, pois não inserimos o console.log que é responsável na execução para mostrar algo no console. */

// Exercício 2
/* Essa função recebe o texto do usuário, converte todo o texto em letras minusculas e verificar se tem a palavra Cenoura dentro do texto recebido, imprimi no console o texto final

i. eu gosto de cenoura
ii. cenoura é bom pra vista
iii. cenouras crescem na terra

*/


// Exercícios de escritas de código

// Exercício 1


let nome = prompt("Digite seu nome:")
let idade = prompt("Digite sua idade")
let cidade = prompt("Digite onde você mora")


function meusDados(){
    
    let mensagem = `Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou estudante.`
    console.log(mensagem)

}

meusDados() 


//b.



function meusDados(nome,idade,cidade,profissao){

    nome = prompt("Digite seu nome:")
    idade = prompt("Digite sua idade:")
    cidade = prompt("Digite onde você mora:")
    profissao = prompt("Digite sua profissão:")

    let mensagem = `Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`

    return mensagem
}

console.log(meusDados()) 


//Exercício 2

//a.

function soma(num1,num2){
    let soma = num1 + num2
    return soma
}

console.log(soma(25,25)) 


//b.

function comparar(num1,num2){
    let comparar = num1 >= num2
    return comparar

}

console.log(comparar(300,299)) 


//c.

 
function verificaParImpar(num){
    let verificaParImpar = num % 2 === 0
    return verificaParImpar
}

console.log(verificaParImpar(20)) 



//d.



let mensagemRecebida = prompt("Digite uma mensagem:")

function mensagem(string){
    
    console.log("Tamanho da mensagem: ", mensagemRecebida.length)
    console.log("Tudo em letras maiúsculas: ", mensagemRecebida.toUpperCase())
}

console.log(mensagem(mensagemRecebida))  



//Exercício 3.


function operacoes(){

    let num1 = Number(prompt("Digite o primeiro número:"))
    let num2 = Number(prompt("Digite o segundo número:"))

    let soma = num1 + num2
    let subtracao = num1 - num2
    let multiplicacao = num1 * num2
    let divisao = num1 / num2


    console.log(soma)
    console.log(subtracao)
    console.log(multiplicacao)
    console.log(divisao)

}

operacoes() 


//Desafio

//1.

//a.

let dizerNome = (nome) => {
    console.log(nome)
}
dizerNome("Santiago") 


//b.

let soma = (num1,num2) => num1 + num2
    console.log(soma(10,15)) 
   

//2.

function teoremaPitagoras(num1, num2){
    let hip1 = num1 + num2
    let hip2 = hip1 / 5
    return hip2
}
console.log(teoremaPitagoras(16, 9))

// Seria 4 elevado a 2 e 3 elevado a 2 = 16 + 9 = 25 / 5 = 5 
