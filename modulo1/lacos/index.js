// Exercícios de interpretação de código

// 1.

/* O código está fazendo um laço de repetição que inicia no 0 e vai até o 5,
está incrementando de 1 a 1. Será impresso no console 0,1
2,3,4 até valor não ser mais menor que 5, quando ser igual ou maior o programa vai parar */

// 2.

/* 
//a.
Será impresso no console os números maior que 18. 
19,21,23,25,27,30

//b.
Sim, seria necessario criar uma variavel para receber o elemento e imprimir ele no console. 
*/

//3.

/* Resultado seria:

*
**
***
****
 */

// Exercícios de escrita de código

// 1.


let quantidadeBichos = Number(prompt("Quantos pets você têm?"))
let nomes = []

if (quantidadeBichos === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else if (quantidadeBichos > 0) {
    while (quantidadeBichos) {
        let nomesBichos = prompt("Digite o nome dele")
        nomes.push(nomesBichos)
        quantidadeBichos++
    }

    console.log(nomes);
}


//2.
// a.
let arrayValorOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function imprimeValorArrayOriginal(array) {
    console.log(array)
}
imprimeValorArrayOriginal(arrayValorOriginal)

//b.
for (let posicao of arrayValorOriginal) {
    let divididos = arrayValorOriginal[0] / 10

    console.log(divididos)


}

    if (arrayValorOriginal % 2 === 0) {

}
