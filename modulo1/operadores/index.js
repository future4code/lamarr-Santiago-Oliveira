// Exercício 1

/* 
false
false
true
boolean */

// Exercício 2

/* Será feito a contatenação dos valores ao inves da soma,
 pois tudo que é recebido pelo prompt vira string, e dessa forma não soma ele concatena */

// Exercício 3

/* 
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) */

// Exercício 1

/* 
let idade = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

let idadeMaior = idade > idadeAmigo
let diferencaIdade = idade - idadeAmigo

console.log("Sua idade é maior que a do seu melhor amigo?", idadeMaior)

console.log("A diferença de idade é:", diferencaIdade, "ano(s)") */

// Exercício 2

/* 
let numero = Number(prompt("Insira um número par:"))

console.log(numero % 2)  

Retornou resto 0 qunado digitado números pares
Retorna resto: 1 quando digitado números impares

*/

// Exercícío 3

/* 
let idadeEmAnos = Number(prompt("Digite sua idade:"))

let idadeEmMeses = idadeEmAnos * 12
let idadeEmDias = idadeEmAnos * 365
let idadeEmHoras = (365 * 24) * idadeEmAnos

console.log("Idade em anos é:", idadeEmAnos)
console.log("Idade em meses é:", idadeEmMeses)
console.log("Idade em dias é:", idadeEmDias)
console.log("Idade em horas é", idadeEmHoras) */


// Exercício 4

/* 
let primeiroNumero = Number(prompt("Digite o primeiro número:"))
let segundoNumero = Number(prompt("Digite o segundo número:"))


let numeroMaior = primeiroNumero > segundoNumero
let numeroIgual = primeiroNumero === segundoNumero
let restoDaDivisaoPrimeiro = primeiroNumero % segundoNumero
let restoDadivisaoSegundo = segundoNumero %  primeiroNumero

let primeiroDivisivel = restoDaDivisaoPrimeiro === 0
let segundoDivisivel = restoDadivisaoSegundo === 0


console.log("O primeiro número é maoir que o segundo?", numeroMaior)
console.log("O primeiro número é igual ao segundo?", numeroIgual)
console.log("O primeiro número é divisível pelo segundo?", primeiroDivisivel)
console.log("O segundo número é divisível pelo primeiro?", segundoDivisivel) */


                                //Desafio
// a.
/* 
let kelvin
let graus_Fahrenheit = 77


let conversao = (kelvin) = (graus_Fahrenheit - 32)*(5/9) + 273.15

console.log(conversao) */

//b.

/* 
let graus_Celsius = 80
let graus_Fahrenheit

let conversao = (graus_Fahrenheit) = (graus_Celsius)*(9/5 + 32)

console.log(conversao) */

//c. e d.

/* let graus_Celsius = Number(prompt("Digite o valor em Graus Celsius que deseja converter:"))
let graus_Fahrenheit
let kelvin

let conversaoF = (graus_Fahrenheit) = (graus_Celsius)*(9/5 + 32)
let conversaoK = (kelvin) = (graus_Fahrenheit - 32)*(5/9) + 273.15


console.log(conversaoF, conversaoK) */

//Exercício 2

/* 
let quilowattHora = 0.05
let consumo = 280

let valorParaPagamento = quilowattHora * consumo
let percentual =  15.0 / 100
let valorComDesconto = valorParaPagamento - (percentual * valorParaPagamento)

console.log(valorParaPagamento)
console.log(valorComDesconto) */

//Exercicio 3
//a.

/* 
let lb = 20
let kg

let conversao = lb / 2.2046 

console.log("20lb equivalem a", conversao, "kg") */

//b.

/* 
let oz = 10.5
let kg

let conversao = oz / 35.274

console.log("10.5oz equivalem a", conversao, "kg") */

//c.

/* 
let mi = 100
let m

let conversao = mi / 0.00062137

console.log("100mi equivalem a", conversao, "m") */

//d.

/* 
let ft = 50
let m

let conversao = ft / 3.2808

console.log("50ft equivalem a", conversao, "m") */

//e.

/* 
let gal = 103.56
let l

let conversao = gal / 0.26417

console.log("103.56gal equivalem a", conversao, "l") */

//f.

/* 
let xic = 450
let l

let conversao = xic * 0.24

console.log("450xic equivalem a", conversao, "l") */

//g.

/* let xic = Number(prompt("Digite o valor em xicara para converter em litro:")) 
let l

let conversao = xic * 0.24

console.log("450xic equivalem a", conversao, "l") */






















