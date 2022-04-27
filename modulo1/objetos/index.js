// Exercício 1

// a.
/* 
Matheus Nachtergaele
Virginia Cavendish
{Canal: "Globo" Horario: "14hs"} 
*/

// Exercício 2

// a.
/* 
{nome: "juca", idade: 3, raca: "SRD"}
{nome: "juba", idade: 3, raca: "SRD"}
{nome: "jubo", idade: 3, raca: "SRD"}

//b.
Faz uma cópia do objeto referenciado. 
*/

// Exercício 3

/* 
// a.
false
undefined

// b.
false porque foi definido backender como false
altura undefined porque não foi declaro altura 
*/


//Exercício de escrita de código

//Exercício 1

//a.

/* Nesse exercício só consegui fazer a questão a,
 a b, fiz uma lógica, porém não troca os apelidos quando chamo a função, 
 diz que não foi definida, sendo que estou copiando o
primeiro objeto e só alterando os valores da propriedade apelidos.
Acabei fazendo conforme abaixo, no primeiro objeto imprime a frase certinho,
 no segundo objeto só imprimi os dados sem a frase, realizei de duas formas,
  porém as duas ficaram com o mesmo resultado */
/*
 const pessoa = {
    nome: "Santiago",
    apelidos: ["San", "Santi", "Sant"],
}

const imprimirMensagem = (obj) => {
    const frase = (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
    
    return frase
}

console.log(imprimirMensagem(pessoa))

const outrosApelidos = {
    ...pessoa,
    apelidos: ["Sant", "Santi", "San"]
}
console.log(outrosApelidos)

*/





/*
// Exercício 2
 

 
const dadosPessoa1 = {
    nome: "Santiago",
    idade: 30,
    profissao: "Programador"
}
 

 const dadosPessoa2 = {
    nome: "Fernanda",
    idade: 28,
    profissao: "Vagabundo"
}

function retornaInformacoes (obj) {
    let arrayInformacoes = [obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length]

    return arrayInformacoes
}

console.log(retornaInformacoes(dadosPessoa1))
console.log(retornaInformacoes(dadosPessoa2))
*/


//Exercício 3
/*
// Uma forma de fazer
let carrinho = []

let fruta1 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "Maça",
    disponibilidade: true
}

const fruta3 = {
    nome: "Uva",
    disponibilidade: true
}

function sacolao () {
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)
}

sacolao()

console.log(carrinho)  
*/

/*

// Outra forma e mais prática e realmente usando a função
let carrinho = []

const fruta1 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "Maça",
    disponibilidade: true
}

const fruta3 = {
    nome: "Uva",
    disponibilidade: true
}

function sacolao (fruta) {
    carrinho.push(fruta)
    
}

sacolao(fruta1)
sacolao(fruta2)
sacolao(fruta3)

console.log(carrinho) 
*/


//Desafio

// 1.


//Não voltou tipo objeto, voltou function, não consegui entender porque e não consegui mudar para retornar objeto.
/*
let nome = prompt("Digite seu nome:")
let idade = Number(prompt("Digite sua idade:"))
let profissao = prompt("Digite sua profissão:")

function dadosPessoa() {
    let nomeUsuario = nome
    let idadeUsuario = idade
    let profissaoUsuario = profissao

    const dadosColetados = {
        nome: nomeUsuario,
        idade: idadeUsuario,
        profissao: profissaoUsuario
    }   
    
    return dadosColetados
}
  
console.log(dadosPessoa())
console.log(typeof dadosPessoa)
console.log(typeof dadosColetados) 



//Exercício 2


// Realizei exercício porém só retorna false, não consegui resolver
function filmes(){
    const filme1 = {
        nome: "Rei Leão",
        anoDeLancamento: "12-05-1989"
    }

    const filem2 = {
        nome: "Era do Gelo",
        anoDeLancamento: "10-08-1999"
    }

    const lancadoPrimeiro = filme1.anoDeLancamento <= filem2.anoDeLancamento
    //  const lancadoJunto = filme1.anoDeLancamento === filem2.anoDeLancamento

    return lancadoPrimeiro

    // return filme1.anoDeLancamento <= filem2.anoDeLancamento
  
    
}

console.log(filmes()); 


//Exercício 3


let carrinho = []

let fruta1 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "Maça",
    disponibilidade: true
}

const fruta3 = {
    nome: "Uva",
    disponibilidade: true
}

function sacolao () {
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)
}

sacolao()

console.log(carrinho) 

function controleSacolao() {
    fruta1 = {
        ...fruta1,
        disponibilidade: false
    }
   return fruta1
   }


console.log(controleSacolao(fruta1)) 
*/

//Outra forma e mais prático e usando a função de fato como visto no Plantão
/*
let carrinho = []

const fruta1 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "Maça",
    disponibilidade: true
}

const fruta3 = {
    nome: "Uva",
    disponibilidade: true
}

function sacolao (fruta) {
    carrinho.push(fruta)
    
}

sacolao(fruta1)
sacolao(fruta2)
sacolao(fruta3)

console.log(carrinho) 

function controleSacolao(fruta) {
    frutaNova = {
        ...fruta1,
        disponibilidade: false
    }
   return fruta1
   }


controleSacolao(fruta1)
console.log(frutaNova);
*/
