// Exercício 1

/* 
undefined

null

11

3

3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13

9
*/

// Exercício 2

/* 
"SUBI NUM ÔNIBUS EM MIRROCOS"
27
*/

// Exercício 1


let nome = prompt("Digite seu nome:")
let email = prompt("Digite seu e-mail:")

let usuarioCadastrado = `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`

console.log(usuarioCadastrado)


// Exercício 2



let comidasPreferidas = ["Lasanha", "Nhoque", "Farofa", "Frango Assado", "Batata-frita"]

console.log(comidasPreferidas)
console.log("Essas são as minhas comidas preferidas: \n")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])
console.log(comidasPreferidas[5])

let comidaUsuario = prompt("Digite sua comida preferida:")

let i = 0

comidasPreferidas[i+1] = comidaUsuario

console.log(comidasPreferidas)  



// Exercício 3



let listaDeTarefas = []

let tarefa1 = prompt("Digite sua primeira tarefa que você precisa realizar no dia-a-dia:")
let tarefa2 = prompt("Digite sua segunda tarefa que você precisa realizar no dia-a-dia:")
let tarefa3 = prompt("Digite sua terceira tarefa que você precisa realizar no dia-a-dia:")

listaDeTarefas = [tarefa1, tarefa2, tarefa3]

console.log(listaDeTarefas)

let opcaoUsuario = Number(prompt("Digite o índice da tarefa que já realizadou: 1, 2 ou 3?"))

listaDeTarefas.splice(opcaoUsuario-1,1)

console.log(listaDeTarefas) 




                                    // Desafio

// 1.

    let string = "Eu estudo na Labenu!"
    let array = string.split("")

    console.log(array) 

 
// 2.


let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log(frutas.indexOf("Abacaxi", [pontoInicial = 0]))
console.log(frutas.length) 
 











