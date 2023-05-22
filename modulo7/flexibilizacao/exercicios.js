// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura!"))
  const largura = Number(prompt("Digite a largura!"))
  const areaRetangulo = altura * largura

  console.log(areaRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual!"))
  const anoNascimento = Number(prompt("Digite o ano de nascimento!"))
  const idade = anoAtual - anoNascimento

  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return imc = peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome!")
  const idade = Number(prompt("Digite seu idade!"))
  const email = prompt("Digite seu email!")

  const mensagem = (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

  console.log(mensagem)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua cor favorita 1!")
  const cor2 = prompt("Digite sua cor favorita 2!")
  const cor3 = prompt("Digite sua cor favorita 3!")

  console.log([cor1, cor2, cor3]);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let stringMaiuscula = string.toUpperCase()

  return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroArray = retornaPrimeiroElemento(array)
  const ultimoArray = retornaUltimoElemento(array)

  array[0] = ultimoArray
  array[array.length - 1] = primeiroArray

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual!"))
  const anoNascimento = Number(prompt("Digite o ano nascimento!"))
  const anoEmissaoCarteira = Number(prompt("Digite o ano que sua carteira foi emitida!"))

  const idade = anoAtual - anoNascimento
  const tempoCarteira = anoAtual - anoEmissaoCarteira

  const cond1 = idade <= 20 && tempoCarteira >= 5
  const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
  const cond3 = idade > 50 && tempoCarteira >= 15

  console.log(cond1 || cond2 || cond3);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const cond1 = ano % 400 === 0
  const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)

  return cond1 || cond2;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDe = prompt("Você é maior de 18 anos? Sim ou Não")
  const ensino = prompt("Você é possui ensino médio Sim ou Não")
  const disponibilidade = prompt("Você é possui disponibilidade exclusiva durante os horários do curso? Sim ou Não")

  const idadeOk = maiorDe === "sim"
  const ensinoOk = ensino === "sim"
  const disponibilidadeOk = disponibilidade === "sim"

  console.log(idadeOk && ensinoOk && disponibilidadeOk);

}