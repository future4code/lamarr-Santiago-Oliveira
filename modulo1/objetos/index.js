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


//Uma tentativa
 
const pessoa = {
    nome: "Santiago",
    apelidos: ["San", "Kiko", "Sant"],
    todosOsApelidos: () => {
        let frase = (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
        return frase
        
    }
}

console.log(pessoa.todosOsApelidos(pessoa))  


//b.

const novosApelidos = {
    ...pessoa,
    apelidos: ["Santi", "Bolacha", "Bu"],
    todosOsApelidos: () => {
        let frase = (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
        return frase
 }
}

novosApelidos.todosOsApelidos()
console.log(novosApelidos)



//Outra tentativa

 const pessoa = {
    nome: "Santiago",
    apelidos: ["San", "Kiko", "Sant"],
}

function minhaFuncao(){
    let frase = (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
    return frase
}

console.log(minhaFuncao(pessoa))

const novosApelidos = {
    ...pessoa,
    apelidos: ["Santi", "BU", "Bolacha"],
    todosOsApelidos: () => {
         frase = (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
    return frase
    
}

}
minhaFuncao()
console.log(novosApelidos) 






// Exercício 2
 

function minhaFuncao() { 

const dadosPessoa1 = {
    nome: "Santiago",
    idade: 30,
    profissao: "Programador"
}
    return [dadosPessoa1.nome, dadosPessoa1.nome.length, dadosPessoa1.idade, dadosPessoa1.profissao, dadosPessoa1.profissao.length]

   
}

console.log(minhaFuncao())



function minhaOutraFuncao(){
 const dadosPessoa2 = {
    nome: "Fernanda",
    idade: 28,
    profissao: "Vagabundo"
}
return [dadosPessoa2.nome, dadosPessoa2.nome.length, dadosPessoa2.idade, dadosPessoa2.profissao, dadosPessoa2.profissao.length] 

}

console.log(minhaOutraFuncao()) 


//Exercício 3

 
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

function sacolao () {
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)
}

sacolao()

console.log(carrinho) 



//Desafio

// 1.


//Não voltou tipo objeto, voltou function, não consegui entender porque e não consegui mudar para retornar objeto.

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
