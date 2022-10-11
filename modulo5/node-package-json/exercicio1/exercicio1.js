// Utilizando o process.argv é possível acessar 
// os parâmetros passados na linha de comando para o node.

const nome = process.argv[2]
const idade = Number(process.argv[3])
const novaIdade = Number(idade + 7)

const imprimiDados = () => {
    const frase = `Olá, ${nome}! Você tem ${idade} anos.`
    return frase
}

const idadeDaquiSeteAnos = () => {
    const fraseNovaIdade = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`
    return fraseNovaIdade
}

const retornoImprimiDados = imprimiDados()
const retornoIdadeDaquiSeteanos = idadeDaquiSeteAnos()
console.log(retornoImprimiDados)
console.log(retornoIdadeDaquiSeteanos);