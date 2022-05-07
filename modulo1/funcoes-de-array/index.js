//Exercícios de interpretação de código

//Exercício 1

// a) Será impresso no console:
/* 
O item do array: nome: "Amanda Rangel", apelido: "Mandi" o indice: 0 e o array original
O item do array: nome: "Laís Petra", apelido: "Laura" o indice: 1 e o array original
O item do array: nome: "Letícia Chijo", apelido: "Chijo" o indice: 2 e o array original 
*/

//Exercício 2

// a) Será impresso no console:
/* 
O item nome, o indice
"Amanda Rangel" indice 0
"Laís Petra" indice 1
"Letícia Chijo" indice 2
*/



//Exercício 3

// a) Será impresso no console:
/*
Os itens com apelidos diferentes de Chijo
nome: "Amanda Rangel", apelido: "Mandi"
nome: "Laís Petra", apelido: "Laura" 
*/

// Exercícios de escrita de código

//Exercício 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//  a) Crie um novo array que contenha apenas o nome dos doguinhos

const novoArrayNomes = pets.map((item, index, array) => {
    return item.nome
 })
 
 console.log(novoArrayNomes)

//  b) Crie um novo array apenas com os cachorros salsicha

const novoArraySalsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})

console.log(novoArraySalsicha);


// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"



function verificarRaca(pets){
    if (pets.raca === "Poodle"){
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}!`); 
    }
}

let petsSelecionados = pets.filter(verificarRaca)


console.log(petsSelecionados);
  

//Exercício 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a) Crie um novo array que contenha apenas o nome de cada item

const nomeCadaItem = produtos.map((item, indice, array) => {
    return item.nome

})

console.log(nomeCadaItem);

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

function produtosComDesconto (produtos){
    return produtos.nome + produtos.preco * 0.95
}

let produtosComDescontoAplicado = produtos.map(produtosComDesconto)
console.log(produtosComDescontoAplicado);

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const categoriaBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})

console.log(categoriaBebidas);

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê" 

const produtosYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})

console.log(produtosYpe);

// e) Crie um novo array onde cada item é uma frase
//  "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"


function compreProdutosYpe(produtos){
    if(produtos.nome.includes("Ypê"))
    console.log(`Compre ${produtos.nome} por ${produtos.preco}"`);
}


let produtosYpeMensagem = produtos.filter(compreProdutosYpe)
console.log(produtosYpeMensagem)



