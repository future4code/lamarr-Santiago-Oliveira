/* // EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  
  return num1 + num2

}

console.log(soma(10, 5))

// EXERCÍCIO 0B
function imprimeMensagem() {
  
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

imprimeMensagem()
*/



// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  
  const altura = Number(prompt("Digite uma altura:"))
  const largura = Number(prompt("Digite uma largura:"))

  console.log(altura * largura)

}

calculaAreaRetangulo()



// EXERCÍCIO 02
function imprimeIdade() {
 

  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Digite o ano de nascimento:"))


  console.log(anoAtual - anoNascimento)
  
}

imprimeIdade(2022, 1992)

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 

return(peso / (altura * altura))

}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  

  let nome = prompt("Digite seu nome:")
  let idade = Number(prompt("Digite sua idade:"))
  let email = prompt("Digite seu email:")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  

  let cor1 = prompt("Digite sua primeira cor favorita:")
  let cor2 = prompt("Digite sua segunda cor favorita:")
  let cor3 = prompt("Digite sua terceira cor favorita:")

let cores = [cor1, cor2, cor3]

  console.log(cores)
}

imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  


let stringMaiuscula = string.toUpperCase()

  return stringMaiuscula 

}

retornaStringEmMaiuscula("LaBeNu")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 

let ingressosPrecisamSerVendidos = custo / valorIngresso

return ingressosPrecisamSerVendidos

}

calculaIngressosEspetaculo(5000, 25)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  

let tamanhoStrin1 = string1.length
let tamanhoString2 = string2.length

let mesmoTamanho = tamanhoStrin1 === tamanhoString2

return mesmoTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {


array [1,2,3]

return array[0]

}



// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  

array [1,2,3,4,5]
let ultimo = array[array.length -1]

return ultimo

}




// EXERCÍCIO 11

/*
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  
// Primeira Tentativa sem sucesso

          // array.splice(0,1)
          // array.unshift(3)
          // array.splice(2,1)
          // array.push(1)

          // return array


// Segunda Tentativa sem sucesso

                // array [1,2,3]

                // let i = 0

                // array[i+2] = 1

                // array[i+0] = 3


                // return array

                
                            // Terceira Tentativa sem sucesso

                            // array = [1,2]
                            // array.splice(0,2,2,1)


                            // return array
// array.fill(2,0)

// Quarta Tentativa sem sucesso

// array = [1,2,3]

// array.splice(0,3,3,1)
// array.splice(0,1,3,2)
// return array

// }

trocaPrimeiroEUltimo()
 */


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

 return string1.toUpperCase() === string2.toUpperCase()

}
checaIgualdadeDesconsiderandoCase("Azul", "Vermelho")




// EXERCÍCIO 13
/*
function checaRenovacaoRG() {
  
// Tentativa sem sucesso

let anoAtual = prompt("Dgite o ano atual:")
let anoNascimento = prompt("Digite o ano de nascimento:")
let anoEmissao = prompt("Digite o ano que seu RG foi emitido:")

let idade = anoAtual - anoNascimento
let dataEmissao = anoEmissao - anoAtual

if(idade <= 20 && dataEmissao === 5){
  console.log("RG precisa ser renovado")
} else if(idade <= 50 && dataEmissao === 10){
  console.log("RG precisa ser renovado")
} else if(idade >= 50 && dataEmissao === 15){
  console.log("RG precisa ser renovada")
}
  
}

// if(idade === 20){
// console.log( idade === 20)
// }else if(idade === 50){
// console.log(idade === 50)

// }else{
//   console.log(idade >= 50)
// }



checaRenovacaoRG()
*/

/*
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  

//Uma tentativa - sem sucesso
                                    // let anosMultiplos = ano / 400 
                                    // let anoMultiploQuatro = ano / 4
                                    // let naoBissextos

                                    // let resposta1 = anosMultiplos
                                    // let resposta2 = anoMultiploQuatro
                                    // let resposta3 = naoBissextos

                                    // if(resposta1 && resposta2 && resposta3){

                                    // }
                                    // return 
//Segunda tentativa - sem sucesso
                //let anoBissexto = ((ano % 4 === 0) && (ano % 100 != 0) || (ano % 400 === 0))
                    console.log(anoBissexto)

 //Terceira tentativa - sem sucesso    

let multiploQuatro = (ano % 4 === 0)
let naoMultiplo = (ano % 100 != 0)
let multiplideQuatrocentos = (ano % 400 === 0)

let anoBissexto =(multiploQuatro && naoMultiplo) || multiplideQuatrocentos

  console.log(anoBissexto)



}

checaAnoBissexto(2020)
*/


/*
// EXERCÍCIO 15


function checaValidadeInscricaoLabenu() {
  
// Tentativa sem sucesso

let maiorDe = prompt("Você é maior de 18 anos? - Sim ou Não")
let ensinoMedioCompleto = prompt("Você possui ensino médio completo? - Sim ou Não")
let disponibilidadeHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso? - Sim ou Não")

// maiorDe = maiorDe === "Sim"
// ensinoMedioCompleto = ensinoMedioCompleto === "Sim"
// disponibilidadeHorario = disponibilidadeHorario === "Sim"

if(maiorDe === "Sim" && ensinoMedioCompleto === "Sim" && disponibilidadeHorario === "Sim"){
  console.log("Inscrição válida para o curso")
} else {
  console.log("Inscrição não é válida para o curso, não atende os requesitos")
}
}

checaValidadeInscricaoLabenu()
*/
